import React, {useCallback} from 'react';
import Navlink from "../link/Navlink";
import {useKeycloak} from "@react-keycloak/web";
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const {keycloak} = useKeycloak();
    const location = useLocation()

    const login = useCallback(() => {
        keycloak?.login()
    }, [keycloak])
    return (
        <div className="navbar">
            <div className="logo">
                <Navlink to="/">
                    <h2>Anima</h2>
                </Navlink>
            </div>
            { keycloak?.authenticated &&
                <div className="navlinks-left">
                    <Navlink to="/characters">
                        Персонажи
                    </Navlink>
                    <Navlink to="/animations">
                        Анимации
                    </Navlink>
                </div>
            }
            <div className="navlinks-right">
                <Navlink to="/toUsers">
                    Пользователям
                </Navlink>
                {keycloak?.authenticated &&
                    <Navlink to="/" onClick={() => keycloak?.accountManagement()}>{keycloak?.idTokenParsed.email}</Navlink>
                }
                {keycloak?.authenticated
                    ? <Navlink onClick={() => keycloak.logout()} to="/logout" style={{color: 'red'}}>Выйти</Navlink>
                    : <Navlink onClick={login} to="/logout" style={{color: 'blue'}}>Войти</Navlink>
                }
            </div>
        </div>
    );
};

export default Navbar;