import React, {Component} from "react";
import CourseAmountFilter from "../../components/SearchFeatures/CourseAmountFilter/CourseAmountFilter";
import {connect} from 'react-redux';

import style from './Search.module.css';
import * as courseActions from "../../store/actions/course";
import SFBarrierFree from "../../components/SearchFeatures/BarrierFree/BarrierFree";
import SFPrice from "../../components/SearchFeatures/Price/Price";

class Search extends Component {
    constructor(props) {
        super(props);
        this.props.onFetchCourses(this.props.amount);
    }

    changeCourseAmount = (event) => {
        let value = Number.parseInt(event.target.value);
        if (value > 1878) {
            value = 1878;
        } else if (value < 1) {
            value = 1;
        }
        this.props.onFetchCourses(value);
    };

    toggleUiSwitch = (event) => {
        this.props.onCheckBarrierFree(event.target.checked);
    };

    priceSliderHandler = (event, [val1, val2]) => {
        let priceRange;
        if (val2 >= val1) {
            priceRange = {
                min: val1,
                max: val2,
            }
        } else {
            priceRange = {
                min: val2,
                max: val1,
            }
        }

        this.props.onFilterPriceRange(priceRange);
    };

    render() {
        return (
            <div>
                <h1>Detailsuche</h1>
                <div className={style.searchFeature}>
                    <CourseAmountFilter
                        value={this.props.amount}
                        changed={this.changeCourseAmount}
                    />
                </div>
                <div className={style.searchFeature}>
                    <SFBarrierFree
                        accessible={this.props.accessible}
                        changed={this.toggleUiSwitch}
                    />
                </div>
                <div className={style.searchFeature}>
                    <SFPrice
                        onChange={this.priceSliderHandler}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        amount: state.courseReducer.amount,
        accessible: state.courseReducer.accessible,
    }
};

const mapDispatchToProps = (dispatchAction) => {
    return {
        onFetchCourses: (amount) => dispatchAction(courseActions.fetchCourses(amount)),
        onCheckBarrierFree: (accessible) => dispatchAction(courseActions.filterAccessibleCourses(accessible)),
        onFilterPriceRange: (priceRange) => dispatchAction(courseActions.filterPriceRange(priceRange))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);