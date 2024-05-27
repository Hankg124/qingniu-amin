import request from '@/utils/request'
import type { MenuParamsListType } from '../types/permission/menuType';


// 获取菜单列表
export const getMenuListApi=()=> {
    return request<MenuParamsListType>("/menu/list","GET");
}