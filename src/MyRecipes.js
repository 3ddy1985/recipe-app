import React from "react";

export default class MyRecipes extends React.Component {
    render() {
        let customRecipes = []
        if(this.props.myRecipes && Array.isArray(this.props.myRecipes)) {
            customRecipes = this.props.myRecipes.map((recipe, index) => {
                    
                return (
                    <div className="card mb-3" key={index}>
                        <h3>{recipe.rname}</h3>
                        <p className="card-text">
                            <small className="text-muted">Total time:{recipe.time}</small>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <small className="text-muted">Portions: {recipe.portions} <br />
                        </small>
                        </p>
                        <p className="card-text">Ingredients & instructions: <br />
                        {recipe.instructions}</p>
                        <button onClick={() => this.props.handleDeleteRecipe(index)}>Delete</button>
                    </div>
                )
            })
        }



        return(
            <div className="my-recipes">
                <div className="container-fluid d-flex">
                    <div className="row">
                        <div className="created-recipes">
                            <h3>My custom recipes</h3>
                            {customRecipes}
                        </div>
                        <div className="saved-recipes">
                            <h3>My saved recipes</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 