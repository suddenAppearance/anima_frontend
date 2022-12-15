import React from 'react';
import {Route, Routes} from "react-router-dom";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Project from "../pages/Project";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Главная</div>}>
            </Route>
            <Route path="/toUsers" element={<div>Пользователям</div>}>
            </Route>
            <Route path="/toCompanies" element={<div>Компаниям</div>}>
            </Route>
            <Route path="/projects" element={<Projects/>}>
            </Route>
            <Route path="/projects/:id" element={<Project/>}>
            </Route>
            <Route path="/profile" element={<Profile/>}></Route>
            }
        </Routes>
    );
};

export default AppRouter;