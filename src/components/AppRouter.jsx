import React from 'react';
import {Route, Routes} from "react-router-dom";
import Profile from "../pages/Profile";
import Characters from "../pages/Charcters";
import UserGuide from "../pages/UserGuide";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Главная</div>}>
            </Route>
            <Route path="/toUsers" element={<UserGuide/>}>
            </Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/characters" element={<Characters/>}>
            </Route>
            <Route path="/animations" element={<div>Анимации</div>}>
            </Route>
        </Routes>
    );
};

export default AppRouter;