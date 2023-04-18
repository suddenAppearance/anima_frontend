import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import UserGuide from "../pages/UserGuide";
import Index from "../pages/Index";

const AppRouter = () => {
    return (
        <Routes>
            <Route key="index" path="/" element={<Index/>
            }>
            </Route>
            <Route key="toUsers" path="/toUsers" element={<UserGuide/>}>
            </Route>
            <Route key="characters" path="/characters" element={<Main route="characters"/>}>
            </Route>
            <Route key="animations" path="/animations" element={<Main route="animations"/>}>
            </Route>
        </Routes>
    );
};

export default AppRouter;