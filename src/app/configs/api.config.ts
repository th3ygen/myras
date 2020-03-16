export const IP = '159.89.206.45';
export const ROUTE_CONFIG = {
    auth: {
        login: `http://${IP}:8080/api/users/login`,
        logout: `http://${IP}:8080/api/users/logout`,
        current: `http://${IP}:8080/api/users/current`,
        register: `http://${IP}:8080/api/users`,
        refreshToken: `http://${IP}:8080/refreshtoken`,
    },

    user: {
        getOne: `http://${IP}:8080/api/users/get/`,
        getAll: `http://${IP}:8080/api/users/getAll`,
        activateMember: `http://${IP}:8080/api/users/activate/`
    },

    news: {
        post: `http://${IP}:8080/api/news/add`,
        latest: `http://${IP}:8080/api/news/latest/`
    }
};
