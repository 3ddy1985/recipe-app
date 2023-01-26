import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




export default class MyIngredients extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.myIngredients !== this.props.myIngredients) {
            this.forceUpdate();
        }
    }    
    
    render() {
        const myIngredient = this.props.myIngredients.map((ingredient, index) => (
            <button key={index} className="ingredient selected-ingredient" onClick={() => this.props.handleIngredientClick(ingredient)} >{ingredient}</button>
        ))

        return(
            <div className="my-ingredients">
                <h1>My Ingredients</h1>
                <div>
                    {myIngredient}
                </div>
                <button onClick={this.props.searchByIngredients}>Search</button>
            </div>
        ) 
    }
} 