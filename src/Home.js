import React from "react";
import Recipes from "./Recipes";
import SearchBox from "./SearchBox";
import IngredientSection from "./IngredientsSection";
import MyIngredients from "./MyIngredients";

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
    
  
    render() {
        return(
            <>
                <nav>Home</nav>
                <SearchBox />
                <IngredientSection 
                    allIngredients={this.state.allIngredients}
                    selectedIngredients={this.state.selectedIngredients}
                    compareIngredientsSearch={this.compareIngredientsSearch}
                    handleSearchInputChange={this.handleSearchInputChange}
                    handleIngredientClick={this.handleIngredientClick}
                />
                <Recipes />     
                <MyIngredients 
                    myIngredients={this.state.selectedIngredients}
                    handleIngredientClick={this.handleIngredientClick}
                />           
            </>
        )
    }
}