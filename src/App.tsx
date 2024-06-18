import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <div className="best">BEST</div>


            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                    <Route path="/" element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
