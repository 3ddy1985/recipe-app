import React from "react";
import Ingredients from "./IngredientsSection";
import DietaryRequirements from "./DietaryRequirements";
import foods from "./IngredientsList"

export default class FilterSection extends React.Component {
    render() {
        return(
            <>
                <Ingredients foods={foods} />
                <DietaryRequirements />
            </>
        )
    }
}