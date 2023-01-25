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
          <Route path="/my-recipes" component={MyRecipes} />
        </>
      </Router>
    );
  }
}  
