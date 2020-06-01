import React, {Component} from "react";
import ProgressBar from "../UiComponents/ProgressBar/ProgressBar";

class Search extends Component {
    render() {
        return (
            <div>
                <h1>SideBar</h1>
                <div>
                    <h4>Anzahl der Kurse</h4>
                    <ProgressBar/>
                </div>
            </div>
        );
    }
}

export default Search;