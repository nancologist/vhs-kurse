import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {MuiSwitch} from "../../../UiComponents/MaterialUi/MaterialUi";
import styles from './BarrierFree.module.css';

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#05386b'
        },
        secondary: {
            main: '#5cdb95'
        }
    }
});

const SF_BarrierFree = (props) => {
    return (
        <div className={styles.barrierFree}>
            <label>Barrierefrei</label>
            <ThemeProvider theme={myTheme}>
                <MuiSwitch
                    color={"secondary"}
                    checked={props.accessible}
                    onChange={props.changed}
                    className={styles.mySwitch}
                />
            </ThemeProvider>
        </div>
    );
};

export default SF_BarrierFree;