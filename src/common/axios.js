import {Api_url} from "@/common/config";
import Vue from 'vue'

uni.$u.http.setConfig(config => {
    config.baseURL = Api_url;
    config.timeout = 10000;
    config.header = {
        'Content-Type': 'application/json',
        'Authorization': uni.getStorageSync('user').token
    };
    return config;
});
uni.$u.http.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});
uni.$u.http.interceptors.response.use(response => {
    const data = response.data;
    if (data.code === 0) {
        return data.data;
    } else {
        uni.showToast({
            title: data.message,
            icon: 'none'
        });
        return Promise.reject(data.msg);
    }
}, error => {
    return Promise.reject(error);
});

export default {
    get(url, data) {
        return uni.$u.http.get(url, data);
    },
    post(url, data) {
        return uni.$u.http.post(url, data);
    },
    put(url, data) {
        return uni.$u.http.put(url, data);
    },
    delete(url, data) {
        return uni.$u.http.delete(url, data);
    }
};
