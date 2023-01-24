import React from "react";

export default class MyIngredients extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.myIngredients !== this.props.myIngredients) {
            this.forceUpdate();
        }
    }
    
    render() {
        const myIngredient = this.props.myIngredients.map((ingredient, index) => (
            <button key={index} className="ingredient selected-ingredient" >{ingredient}</button>
        ))

        return(
            <div>
                <h1>My Ingredients</h1>
                <div>
                    {myIngredient}
                </div>
            </div>
        ) 
    }
}