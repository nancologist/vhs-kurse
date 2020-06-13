import React, {Component} from "react";
import CourseAmountFilter from "./SearchFeatures/CourseAmountFilter/CourseAmountFilter";
import {connect} from 'react-redux';

import style from './Search.module.css';
import * as courseActions from "../../store/actions/course";
import SFBarrierFree from "./SearchFeatures/BarrierFree/BarrierFree";
import SFPrice from "./SearchFeatures/Price/Price";

class Search extends Component {
    constructor(props) {
        super(props);
        this.props.onFetchCourses(this.props.amount);
    }

    state = {
        courseAmount: this.props.amount,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.amount !== prevProps.amount) {
            this.setState({courseAmount: this.props.amount});
        }
    }

    changeCourseAmount = (event) => {
        let value = Number.parseInt(event.target.value);
        if (value > 1878) {
            value = 1878;
        } else if (value < 1) {
            value = 1;
        }
        this.setState({courseAmount: value});
        setTimeout(() => {
            this.props.onFetchCourses(value);
        }, 1000)
    };

    toggleUiSwitch = (event) => {
        this.props.onCheckBarrierFree(event.target.checked);
        // console.log(event.target.checked)
    };

    priceSliderHandler = (event, priceRanges) => {
        this.props.onFilterPriceRange(priceRanges);
    };

    render() {
        return (
            <div>
                <h1>Detailsuche</h1>
                <div className={style.searchFeature}>
                    <CourseAmountFilter value={this.state.courseAmount} changed={this.changeCourseAmount}/>
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
        onFilterPriceRange: (priceRanges) => dispatchAction(courseActions.filterPriceRange(priceRanges))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);