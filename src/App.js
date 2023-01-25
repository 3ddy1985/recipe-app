import React from "react";
import HomePage from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RecipeApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
      <nav>
        Home
      </nav>
      <HomePage />
      </>
    )
  }
} 
