import React from 'react';
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Главная</div>}>
            </Route>
            <Route path="/toUsers" element={<div>Пользователям</div>}>
            </Route>
            <Route path="/toCompanies" element={<div>Компаниям</div>}>
            </Route>
            <Route path="/profile" element={<div>Профиль</div>}></Route>
            }
        </Routes>
    );
};

export default AppRouter;