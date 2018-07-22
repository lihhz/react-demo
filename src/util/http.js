
import axios from 'axios';

axios.defauls.baseURL = 'http://localhost:8080/web-spider/';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.interceptors.request.use(config => {
    config.setHeaders([
        // 在这里设置请求头与携带token信息
    ]);
    return config
});
// axios拦截器
axios.interceptors.response.use(response => {
    // 在这里你可以判断后台返回数据携带的请求码
    if (response.data.retcode === 200 || response.data.retcode === '200') {
        return response.data.data || response.data
    } else {
        // 非200请求抱错
        throw Error(response.data.msg || '服务异常')
    }
});

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}