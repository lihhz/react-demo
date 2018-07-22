import http from './http.js';
import apis from './api.js';

function getUserInfo(params = {}) {
    return http.post(apis.getUserInfo, params);
}

export default {getUserInfo};