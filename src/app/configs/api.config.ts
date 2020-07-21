const HOSTNAME = 'localhost';
const PORT = 8080;

const prefix = `http://${HOSTNAME}:${PORT}`;

export const ROUTE_CONFIG = {
    auth: {
        login: prefix + '/api/users/login',
        logout: prefix + '/api/users/logout',
        current: prefix + '/api/users/current',
        register: prefix + '/api/users/register',
        refreshToken: prefix + '/refreshtoken',
    },

    user: {
        myInfo: prefix + '/api/users/currentUser/info',
        getOne: prefix + '/api/users/',
        getAll: prefix + '/api/users/getAll',
        updateInfo: prefix + '/api/users/currentUser/updateInfo',
        updatePW: prefix + '/api/users/currentUser/updatePW',
        getBills: prefix + '/api/users/currentUser/getBills',
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
