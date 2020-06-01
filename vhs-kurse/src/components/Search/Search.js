import React, {Component} from "react";
import ProgressBar from "../UiComponents/ProgressBar/ProgressBar";
import style from './Search.module.css';

class Search extends Component {
    render() {
        return (
            <div>
                <h1>Detailsuche</h1>

                {/* SearchFeature.js with props.children */}
                <div className={style.searchFeature}>
                    <h4>Anzahl der Kurse</h4>
                    <ProgressBar/>
                </div>

            </div>
        );
    }
}

export default Search;