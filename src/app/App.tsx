import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";

import { classNames } from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {

    const {theme, toggleTheme} = useTheme();



    return (
        <div className={classNames("App", {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>TOGGLE THEME</button>

            <div className="best">BEST</div>

            <AppRouter />

        </div>
    );
};

export default App;
