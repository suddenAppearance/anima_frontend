import axios from "axios";

export default class GatewayService {
    constructor(keycloak) {
        const kcToken = keycloak?.token ?? '';
        this.http = axios.create({
            baseURL: process.env.REACT_APP_API_GATEWAY_HOST,
            timeout: 1000,
            headers: {
                Authorization: keycloak ? `Bearer ${kcToken}` : undefined,
            }
        })
    }

    async getFiles() {
        return this.http.get("/api/v1/files/", {params: {type: "CHARACTER"}})
    }

}