import React from "react";
import {PrettoSlider} from "../../../UiComponents/MaterialUi/MaterialUi";

const SF_Price = (props) => {
    return (
        <div>
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