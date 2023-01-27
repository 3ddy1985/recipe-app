import React from "react";
import HomePage from "./Home";
import MyRecipes from "./MyRecipes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class RecipeApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myRecipes: [],
      savedRecipes: [],
      hiddenToggle: "hidden",
    }
  }

  toggleHiddenClass = () => {
    this.setState(prevState => ({
      hiddenToggle: !prevState.hiddenToggle
    }))
  }

  handleCreateRecipe = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRecipe = Object.fromEntries(formData);
    const recipeIndex = this.state.myRecipes.findIndex(recipe => recipe.rname === newRecipe.rname);
    if (recipeIndex === -1) {
        this.setState(prevState => {
            return { myRecipes: [...prevState.myRecipes, newRecipe] }
        });
        event.target.reset();
    } else {
        const myRecipes = [...this.state.myRecipes];
        myRecipes[recipeIndex] = newRecipe;
        this.setState({ myRecipes });
        event.target.reset();
    }
}

handleDeleteRecipe = index => {
  this.setState(prevState => {
      const myRecipes = [...prevState.myRecipes];
      myRecipes.splice(index, 1);
      return { myRecipes };
  });
}

handleSaveRecipe = (recipe) => {
  this.setState(prevState => ({
      savedRecipes: [...prevState.savedRecipes, recipe]
  }));
}



render() {
    return(
      <Router>
        <div className="background">
          <div className="top-gradient">
        <nav>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/my-recipes">My Recipes</Link>
          <button onClick={this.toggleHiddenClass}>Create Recipe</button>
        </nav>
        </div>
        <>
          <Route exact path="/" render={(props) => <HomePage {...props} 
          savedRecipes={this.state.savedRecipes} 
          handleSaveRecipe={this.handleSaveRecipe} />} />
          <Route path="/my-recipes" 
          render={(props) => <MyRecipes {...props} 
          myRecipes={this.state.myRecipes} 
          savedRecipes={this.state.savedRecipes} 
          handleDeleteRecipe={this.handleDeleteRecipe}
          handleSaveRecipe={this.handleSaveRecipe}
          />} />
        </>
        <div className={`"page-overlay" ${this.state.hiddenToggle ? "hidden" : ""}`}>
        <div className="create-recipe-form">
        <form onSubmit={this.handleCreateRecipe}>
          <input type="text" placeholder="Title.." id="rname" name="rname" />
          <br /><br />
          <input type="number" id="portions" name="portions" />
          <br /><br />
          <input type="number" id="time" name="time" />
          <br /><br />
          <textarea id="instructions" name="instructions" rows="8" cols="50" />
          <br /><br />
          <button type="submit" >Add recipe</button>
        </form>
        <button onClick={this.toggleHiddenClass}>Cancel</button>
        </div>
        </div>
        </div>
        <div className="bottom-gradient"></div>
      </Router>

      
    );
  }
}  
