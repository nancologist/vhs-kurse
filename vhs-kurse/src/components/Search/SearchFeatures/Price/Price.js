import React from "react";
import {PrettoSlider} from "../../../UiComponents/MaterialUi/MaterialUi";
import styles from './Price.module.css';

const SF_Price = (props) => {
    return (
        <div className={styles.price}>
            <label>Preis</label>
            <PrettoSlider
                max={300}
                valueLabelDisplay="auto"
                defaultValue={[0, 300]}
                valueLabelFormat={(x) => x + '€'}
                onChangeCommitted={props.onChange}
            />
        </div>
    );
};

export default SF_Price;