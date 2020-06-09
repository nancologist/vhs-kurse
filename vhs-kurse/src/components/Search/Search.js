import React, {Component} from "react";
import CourseAmountFilter from "./SearchFeatures/CourseAmountFilter/CourseAmountFilter";
import style from './Search.module.css';
import {connect} from 'react-redux';
import * as courseActions from "../../store/actions/course";

class Search extends Component {
    state = {
        courseAmount: this.props.initialAmount,
    };

    handleChange = (event) => {
        let value = Number.parseInt(event.target.value);
        if (value > 1878) {
            value = 1878
        }
        this.setState({courseAmount: value});
        this.props.onFetchCourses(value);
    };

    render() {
        return (
            <div>
                <h1>Detailsuche</h1>
                <div className={style.searchFeature}>
                    <CourseAmountFilter
                        value={this.state.courseAmount}
                        changed={this.handleChange}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialAmount: state.courseReducer.amount,
    }
};

const mapDispatchToProps = (dispatchAction) => {
    return {
        onFetchCourses: (amount) => dispatchAction(courseActions.fetchCourses(amount))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);