import axios from "axios";

export default class ProjectService {
    constructor(keycloak) {
        const kcToken = keycloak?.token ?? '';
        this.http = axios.create({
            baseURL: process.env.REACT_APP_PROJECT_SERVICE_HOST,
            timeout: 1000,
            headers: {
                Authorization: keycloak ? `Bearer ${kcToken}` : undefined,
            }
        })
    }

    async createProject(project) {
        return this.http.post("/api/v1/projects/", project)
    }

    async getProjects() {
        return this.http.get("/api/v1/projects/")
    }
}