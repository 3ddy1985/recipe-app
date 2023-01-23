import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ingredients from "./IngredientCatagories";
import Accordion from 'react-bootstrap/Accordion';


export default class IngredientSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    
                </Accordion>
            </div>
        )
    }
}