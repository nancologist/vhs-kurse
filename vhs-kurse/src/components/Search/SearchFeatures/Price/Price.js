import React from "react";
import {PrettoSlider} from "../../../UiComponents/MaterialUi/MaterialUi";
import styles from './Price.module.css';

const SF_Price = (props) => {
    return (
        <div className={styles.price}>
            <label>Preis</label>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={[20, 50]}
            />
        </div>
    );
};

export default SF_Price;