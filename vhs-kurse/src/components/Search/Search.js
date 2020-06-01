import React, {Component} from "react";
import CourseAmountFilter from "./SearchFeatures/CourseAmountFilter/CourseAmountFilter";
import style from './Search.module.css';

class Search extends Component {
    render() {
        return (
            <div>
                <h1>Detailsuche</h1>
                <div className={style.searchFeature}>
                    <CourseAmountFilter courseAmount={100}/>
                </div>

            </div>
        );
    }
}

export default Search;