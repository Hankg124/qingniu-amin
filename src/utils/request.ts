import axios, {
    AxiosError,
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
    type Method
} from 'axios';

import {useCounterStore} from '@/stores/auth'


// 创建axios实例
const service:AxiosInstance = axios.create({
    baseURL:'/api',
    timeout:5000
})

// 请求拦截器
service.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    const store=useCounterStore();
    const token=store.token;
    if(token){
        config.headers.Authorization='Bearer '+token;
    }
    return config;
},(error:AxiosError)=>{
    return Promise.reject(error);
})

// 响应拦截器
service.interceptors.response.use((response:AxiosResponse)=>{
    return response;
},(error:AxiosError)=>{
    return Promise.reject(error);
})

type DataType<T=any>={
    code:number,
    msg:string,
    data:T
}

const request =<T=any> (
    url:string,
    method:Method='GET',
    data?:Object,
    options?:AxiosRequestConfig
)=>{
    return service.request<T,DataType<T>>({url,method,[method==='GET'?'params':'data']:data,...options})
}

export const get=<T=any>(url:string,data:Object)=>{
    request<T>(url,'GET',data);
}

export const post=<T=any>(url:string,data:Object)=>{
    request<T>(url,'POST',data);
}

export const put=<T=any>(url:string,data:Object)=>{
    request<T>(url,'PUT',data);
}

export const del=<T=any>(url:string,data:Object)=>{
    request<T>(url,'DELETE',data);
}

export default request;