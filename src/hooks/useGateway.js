import {useKeycloak} from "@react-keycloak/web";
import GatewayService from "../services/GatewayService";

export const useGateway = () => {
    const {keycloak} = useKeycloak()
    return new GatewayService(keycloak)
}