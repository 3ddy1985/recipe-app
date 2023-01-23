import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Ingredient from "./Ingredient";

export default class IngredientCatagory extends React.Component {
    render() {
        return (
            <div>
                <Ingredient />
            </div>
        )
    }
}