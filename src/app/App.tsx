import React, {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";

import { classNames } from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import Sidebar from "widgets/Sidebar";

const App = () => {

    const {theme} = useTheme();



    return (
        <div className={classNames("App", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

            <div className="best">BEST</div>

        </div>
    );
};

export default App;
