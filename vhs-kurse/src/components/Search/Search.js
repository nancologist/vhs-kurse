import React, {Component} from "react";
import CourseAmountFilter from "./SearchFeatures/CourseAmountFilter/CourseAmountFilter";
import {connect} from 'react-redux';

import style from './Search.module.css';
import * as courseActions from "../../store/actions/course";
import SF_BarrierFree from "./SearchFeatures/BarrierFree/BarrierFree";
import SF_Price from "./SearchFeatures/Price/Price";

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
        this.setState(
            prevState => {
                this.props.onCheckBarrierFree(!prevState.accessible);
                return {accessible: !prevState.accessible};
            }
        );
    };

    render() {
        return (
            <div>
                <h1>Detailsuche</h1>
                <div className={style.searchFeature}>
                    <CourseAmountFilter value={this.state.courseAmount} changed={this.changeCourseAmount}/>
                </div>
                <div className={[style.searchFeature, style.barrierFree].join(' ')}>
                    <SF_BarrierFree
                        accessible={this.props.accessible}
                        changed={this.toggleUiSwitch}
                    />
                </div>
                <div className={style.searchFeature}>
                    <SF_Price/>
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
        onCheckBarrierFree: (accessible) => dispatchAction(courseActions.filterAccessibleCourses(accessible))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);