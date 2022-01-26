import React, { lazy } from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

// pages
const HomePage = lazy(() => import('../views/pages/homePage/HomePage'));


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} exact />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter;
