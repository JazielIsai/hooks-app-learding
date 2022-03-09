import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

function AppRoutes() {
    
    return (
        <BrowserRouter>
            <div>
                <NavBar />

                <Routes>
                    <Route  path="about" element = { <AboutScreen/> } />
                    <Route  path="login" element = { <LoginScreen/> } />
                    <Route  path="" element = { <HomeScreen /> }     />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutes;