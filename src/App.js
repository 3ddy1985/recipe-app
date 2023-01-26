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
    }
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


render() {
    return(
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/my-recipes">My Recipes</Link>
        </nav>
        <>
          <Route exact path="/" component={HomePage} />
          <Route path="/my-recipes" 
          component={MyRecipes}
          myRecipes={this.state.myRecipes} />
        </>
        <div className="page-overlay hidden">
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
        <button>Cancel</button>
        </div>
        </div>
      </Router>

      
    );
  }
}  
