import React from 'react';

const appHeader = (props) => {
    return (
        <header>
            <nav>
                <div>LOGO</div>
                <ul>
                    <li>
                        <a href="/home">Home Seite</a>
                    </li>
                    <li>
                        <a href="/courses">Kurse</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default appHeader;