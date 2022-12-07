import {useKeycloak} from "@react-keycloak/web";
import ProjectService from "../services/ProjectService";

export const useProjectService = () => {
    const {keycloak} = useKeycloak()
    return new ProjectService(keycloak)
}