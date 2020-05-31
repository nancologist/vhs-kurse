import React from 'react';
import {NavLink} from 'react-router-dom';

const appHeader = (props) => {
    return (
        <header>
            <nav>
                <div>LOGO</div>
                <ul>
                    <li>
                        <NavLink to="/">Home Seite</NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses">Kurse</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/">Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default appHeader;