import request from '@/utils/request'

export const getMenuDataApi=()=>{
    return request('/user/menus','GET');
}