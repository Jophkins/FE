import React, {Suspense} from 'react';
import './styles/index.scss';
import {Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

import { classNames } from 'shared/lib/classNames/classNames';


const App = () => {

    const {theme, toggleTheme} = useTheme();



    return (
        <div className={classNames("App", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <div className="best">BEST</div>


            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
