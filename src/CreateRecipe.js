import React from "react";

export default class CreateRecipe extends React.Component {

    // handleCreateRecipe = event => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const newObject = Object.fromEntries(formData);
    //     this.props.handleCreateRecipe(newObject);
    // }

    render() {
        return(
            <>
            {/* <form onSubmit={this.handleCreateRecipe}>
                <lable>Name:</lable>
                    <input type="text" id="rname" name="rname" />
                    <br /><br />
                <lable>Portions:</lable>
                    <input type="number" id="portions" name="portions" />
                    <br /><br />
                <lable>Total time:</lable>
                    <input type="number" id="time" name="time" />
                    <br /><br />
                <lable>Instructions:</lable> <br /> 
                    <textarea id="w3review" name="w3review" rows="4" cols="50" />
                    <br /><br />
                <button type="submit">Add recipe</button>
            </form> */}
            </>
        )
    }
}