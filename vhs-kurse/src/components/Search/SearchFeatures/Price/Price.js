import React from "react";
import {PrettoSlider} from "../../../UiComponents/MaterialUi/MaterialUi";
import styles from './Price.module.css';

const SF_Price = (props) => {
    return (
        <div className={styles.price}>
            <label>Preis</label>
            <PrettoSlider
                max={500}
                valueLabelDisplay="auto"
                defaultValue={[0, 500]}
                valueLabelFormat={(x) => x + '€'}
                onChangeCommitted={props.onChange}
            />
        </div>
    );
};

export default SF_Price;