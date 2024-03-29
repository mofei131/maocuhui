import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import qs from 'qs'
import merge from 'lodash/merge'

// let baceUrl = 'http://api.weifang.mepxns.info:9999/api' //正式
// let baceUrl = 'http://weifang-ai-expo.mepxns.info/api' //测试
// let baceUrl = 'http://127.0.0.1:8102/api' //本地调试
let baceUrl = 'http://192.168.0.147:8102/api' //本地调试
 // let baceUrl = '/java/api'
 // let baceUrl = 'http://cjkiexpo.org.cn/java/api'

const http = axios.create({
    timeout: 1000 * 600,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers['X-Access-Token'] = localStorage.getItem('token')
    } // 请求头带上token
    return config
}, error => {
    return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
    if (response.data && response.data.code === 401) { // 401, token失效

    }
    return response
}, error => {
    return Promise.reject(error)
})

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
    // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
    // console.log( (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : window.SITE_CONFIG.baseUrl) + actionName)
    return baceUrl + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {

    return params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
    return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http
