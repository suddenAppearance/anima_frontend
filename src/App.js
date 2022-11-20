import React from "react";
import './styles/App.css';
import Navbar from "./components/UI/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import AppRouter from "./components/AppRouter";
import keycloak from "./keycloak";

function App() {


    return (
        <ReactKeycloakProvider authClient={keycloak}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </ReactKeycloakProvider>
    )
}

export default App;
