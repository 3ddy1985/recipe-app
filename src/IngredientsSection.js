import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import ingredients from "./IngredientsList";



export default class IngredientSection extends React.Component {
    compareSelectedIngredients = () => {
        const ingredientButtons = document.querySelectorAll(".ingredient");
        ingredientButtons.forEach(button => {
            if (this.props.selectedIngredients.includes(button.textContent)) {
                button.classList.add("selected-ingredient");
            } else {
                button.classList.remove("selected-ingredient");
            }
        });
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.selectedIngredients !== this.props.selectedIngredients) {
            this.compareSelectedIngredients();
        }
    }

    render() {
           const filtered = this.props.allIngredients.map((ingredient, index) => (
            <option key={index} className="ingredient"  >{ingredient}</option>
        ))
        return (
            <div className="ingredients-section">
                <div>
                <input 
                    type="text" 
                    name="example" 
                    list="exampleList"
                    className="ingredient-search"
                    placeholder="Search Ingredients"
                    value={this.props.handleSearchInput}
                    onChange={this.props.compareIngredientsSearch}
                />


                        <datalist id="exampleList">
                            {filtered}
                        </datalist>
                </div>
                <div>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        {Object.keys(ingredients).map((catagory, index) => (
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>{catagory}</Accordion.Header>
                                <Accordion.Body>
                                    {ingredients[catagory].map((ingredient, index) => (
                                        <button key={index} className="ingredient" onClick={() => this.props.handleIngredientClick(ingredient)}>{ingredient}</button>

                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        )
    }
}