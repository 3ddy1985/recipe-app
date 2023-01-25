import React from "react";

export default class CreateRecipe extends React.Component {
    render() {
        return(
            <>
            <form>
                <lable>Name:</lable>
                    <input type="text" id="rname" name="rname" />
                <lable>Portions:</lable>
                    <input type="number" id="portions" name="portions" />
                <lable>Total time:</lable>
                    <input type="number" id="time" name="time" />
                    <textarea id="w3review" name="w3review" rows="4" cols="50" />
            </form>
            </>
        )
    }
}