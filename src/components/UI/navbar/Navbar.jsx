import React, {useCallback} from 'react';
import Navlink from "../link/Navlink";
import {useKeycloak} from "@react-keycloak/web";

const Navbar = () => {
    const {keycloak} = useKeycloak();

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
            <div>
                <Navlink to="/projects">
                    Проекты
                </Navlink>
            </div>
            <div className="navlinks">
                <Navlink to="/toUsers">
                    Пользователям
                </Navlink>
                <Navlink to="/toCompanies">
                    Компаниям
                </Navlink>
                {keycloak?.authenticated &&
                    <Navlink to="/profile">{keycloak?.idTokenParsed.email}</Navlink>
                }
                {keycloak?.authenticated
                    ? <Navlink onClick={() => keycloak.logout()} to="/">Выйти</Navlink>
                    : <Navlink onClick={login} to="/">Войти</Navlink>
                }
            </div>
        </div>
    );
};

export default Navbar;