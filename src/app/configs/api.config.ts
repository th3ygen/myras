const HOSTNAME = 'localhost';
const PORT = 8080;

const prefix = `http://${HOSTNAME}:${PORT}`;

export const ROUTE_CONFIG = {
    auth: {
        login: prefix + '/api/users/login',
        logout: prefix + '/api/users/logout',
        current: prefix + '/api/users/current',
        register: prefix + '/api/users',
        refreshToken: prefix + '/refreshtoken',
    },

    user: {
        getOne: prefix + '/api/users/get/',
        getAll: prefix + '/api/users/getAll',
        activateMember: prefix + '/api/users/activate/'
    },

    news: {
        post: prefix + '/api/news/add',
        latest: prefix + '/api/news/latest/'
    },

    events: {
        publish: prefix + '/api/events/post',
        query: prefix + '/api/events/query',
        getById: prefix + '/api/events/getById',
        getTotalEvents: prefix + '/api/events/total',
        edit: prefix + '/api/events/edit',
        statsInce: prefix + '/api/events/stats/inc',
        hide: prefix + '/api/events/hide',
        delete: prefix + '/api/events/delete',
    }
};
