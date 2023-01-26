import React from "react";
import Recipes from "./Recipes";
import IngredientSection from "./IngredientsSection";
import MyIngredients from "./MyIngredients";
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = 'https://api.edamam.com/api/recipes/v2';
const appId = process.env.REACT_APP_API_ID;
const appKey = process.env.REACT_APP_API_KEY;

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            allIngredients: [],
            mainSearch: "",
            ingredientSearch: "",
            recipes: [],
            selectedIngredients: [],
        }
    }
    componentDidMount() {
        const ingredientButtons = document.querySelectorAll(".ingredient");
        const ingredientContent = [...ingredientButtons].map(button => button.textContent)
        this.setState({
            allIngredients: ingredientContent,
        })
    }
    handleSearchInputChange = event => {
        this.setState({
            searchInput: event.target.value
        })
    }

    compareIngredientsSearch = event => {
        const searchResult = event.target.value;
    
        if(this.state.selectedIngredients.length === 0) {
            if(this.state.allIngredients.indexOf(searchResult) !== -1 ) {
                this.setState({
                    selectedIngredients: [...this.state.selectedIngredients, searchResult],
                    searchInput: ""
                })
            }
        }
        else if(this.state.allIngredients.indexOf(searchResult) !== -1 && !this.state.selectedIngredients.includes(searchResult)) {
            this.setState({
                selectedIngredients: [...this.state.selectedIngredients, searchResult],
                searchInput: ""
            })
        }
      };
    
      handleIngredientClick = ingredient => {
        if (!this.state.selectedIngredients.includes(ingredient)) {
            this.setState({
                selectedIngredients: [...this.state.selectedIngredients, ingredient]
            });
        } else {
            this.setState({
                selectedIngredients: this.state.selectedIngredients.filter(i => i !== ingredient)
            });
        }
    }
    
    searchRecipes = () => {
        const params = {
            type: 'public',
            q: 'NOT REQUIRED',
            app_id: appId,
            app_key: appKey,
            
        };

        axios
            .get(baseURL, { params })
            .then((response) => {
                console.log(response)
                this.setState({
                    recipes: response.data.hits
                });
                console.log(response.data.hits)
            })
            .catch((error) => console.log(error));
    };
  
    render() {
        return(
            <>
                <header>
                <input className="main-search" placeholder="Search recipes..."></input>
                </header>
                <Container fluid>
                    <Row>
                        <IngredientSection 
                            allIngredients={this.state.allIngredients}
                            selectedIngredients={this.state.selectedIngredients}
                            compareIngredientsSearch={this.compareIngredientsSearch}
                            handleSearchInputChange={this.handleSearchInputChange}
                            handleIngredientClick={this.handleIngredientClick}
                        />
                        <Recipes recipes={this.state.recipes}/>     
                        <MyIngredients 
                            myIngredients={this.state.selectedIngredients}
                            handleIngredientClick={this.handleIngredientClick}
                            searchByIngredients={this.searchRecipes}

                        />  
                </ Row>
                </ Container>         
            </>
        )
    }
}