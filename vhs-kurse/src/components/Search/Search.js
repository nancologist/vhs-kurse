import React, {Component} from "react";
import CourseAmountFilter from "./SearchFeatures/CourseAmountFilter/CourseAmountFilter";
import style from './Search.module.css';
import {connect} from 'react-redux';
import * as courseActions from "../../store/actions/course";
import {Switch as UiSwitch} from '@material-ui/core';

class Search extends Component {
    constructor(props) {
        super(props);
        this.props.onFetchCourses(this.props.amount);
    }

    state = {
        courseAmount: this.props.amount,
        accessible: false,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.amount !== prevProps.amount) {
            this.setState({courseAmount: this.props.amount});
        }
    }

    changeCourseAmount = (event) => {
        let value = Number.parseInt(event.target.value);
        if (value > 1878) {
            value = 1878
        }
        this.setState({courseAmount: value, accessible: false});
        this.props.onFetchCourses(value);
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
                    <CourseAmountFilter
                        value={this.state.courseAmount}
                        changed={this.changeCourseAmount}
                    />
                </div>

                <div className={style.searchFeature}>
                    <label>Barrierefrei</label>
                    <UiSwitch
                        checked={this.state.accessible}
                        value={this.state.accessible}
                        onChange={this.toggleUiSwitch}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        amount: state.courseReducer.amount,
    }
};

const mapDispatchToProps = (dispatchAction) => {
    return {
        onFetchCourses: (amount) => dispatchAction(courseActions.fetchCourses(amount)),
        onCheckBarrierFree: (accessible) => dispatchAction(courseActions.filterAccessibleCourses(accessible))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);