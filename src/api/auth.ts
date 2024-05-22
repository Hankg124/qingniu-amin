import request from '@/utils/request'
import type { loginParamsType } from './types/loginType';


// 登录
export const loginApi=(loginParams:loginParamsType)=>{
    return request('/user/login','POST',loginParams);
}

//获取用户信息
export const userInfoApi=()=>{
    return request("/user/info","GET");
}