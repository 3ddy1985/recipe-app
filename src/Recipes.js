import React from "react";

export default class Recipes extends React.Component {
    render() {
        const recipeList = this.props.recipes.map((recipe, index) => (
                            <div className="card mb-3" key={index}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={recipe.recipe.images.REGULAR.url} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{recipe.recipe.label}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
              

            
        ))
        return(
            <>
            <div className="recipe-section">
            <p>Recipes will show here....</p>
                {recipeList}
            </div>
            </>
        )
    }
}