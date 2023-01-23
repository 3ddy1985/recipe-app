import React from "react";
import Recipes from "./Recipes";
import SearchBox from "./SearchBox";
import FilterSection from "./FilterSection";

export default class HomePage extends React.Component {
    render() {
        return(
            <>
                <nav>Home</nav>
                <SearchBox />
                <FilterSection />
                <Recipes />                
            </>
        )
    }
}