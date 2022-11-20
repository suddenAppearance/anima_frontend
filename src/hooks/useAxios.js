import {useKeycloak} from "@react-keycloak/web";
import {useEffect, useRef} from "react";
import axios from "axios";

export const useAxios = (baseURL) => {
    const {keycloak, initialized} = useKeycloak();
    const kcToken = keycloak?.token ?? '';
    const axiosInstance = useRef()

    useEffect(() => {
        axiosInstance.current = axios.create({
            baseURL, headers: {
                Authorization: initialized ? `Bearer ${kcToken}` : undefined,
            },
        });

        return () => {
            axiosInstance.current = undefined;
        }

    }, [baseURL, initialized, kcToken]);

    return axiosInstance;
};