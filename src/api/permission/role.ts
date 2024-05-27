import request from '@/utils/request'
import type { AddroleParamsType, roleAuthListType, roleParamsListType, roleUpdateroleAuthType } from '../types/permission/roleType';

//获取数据
export const roleListApi = (userParams:{pageNum:number,pageSize:number})=>{
    return request<roleParamsListType>('/role/list','GET',userParams);
}

//添加数据
export const roleAddApi = (userParams:AddroleParamsType)=>{
    return request('/role/create','POST',userParams);
}

//删除
export const roleDeleteApi = (id:number)=>{
    return request('/role/delete','GET',{id});
}

//回填授权
export const roleAuthorizationApi = (id:number)=>{
    return request('/role/menuChecked','GET',{id});
}


//修改授权 
export const roleUpdateroleAuthApi = (userParams:roleUpdateroleAuthType)=>{
    return request<roleAuthListType>('/role/addMenu','POST',userParams);
}