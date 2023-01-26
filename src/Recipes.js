import React from "react";

export default class Recipes extends React.Component {
    render() {
        const recipeList = this.props.recipes.map((recipe, index) => {
            const total_time_minutes = recipe.recipe.totalTime;
            const hours = Math.floor(total_time_minutes / 60);
            const minutes = total_time_minutes % 60;

            return (
                <div className="card mb-3" key={index}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={recipe.recipe.images.REGULAR.url} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{recipe.recipe.label}</h5>
                                <div className="in-line">
                                <p className="card-text">
                                    <small className="text-muted">{`Total time: ${hours}:${minutes}`}</small>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <small className="text-muted">Portions: {recipe.recipe.yield} <br />
                                    <ul>
                                    {recipe.recipe.ingredients.map((item, index) => (
                                    <li key={index}>{item.food}</li>
                                    ))}
                                </ul>
                                </small>
                                </p>
                                    <div className="recipe-card-buttons">
                                    <button className="full-recipe-button">View full recipe</button>
                                    <button className="save-recipe-button">Save recipe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
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