//获取角色数据
export type roleParamsListType = {
    code: number;
    data: Data;
    msg: string;
}

export type Data = {
    list: List[];
    total: number;
}

export type List = {
    createdAt: string;
    id: number;
    remark: string;
    rolename: string;
    updatedAt: string;
}

//添加角色请求数据类型
export type AddroleParamsType = {
    remark:string,
    rolename:string,
}

//修改授权请求数据类型
export interface roleUpdateroleAuthType {
    menuIds: number[];
    roleid: number;
}

// export interface Response {
//     code: number;
//     data: Datum[];
//     msg: string;
//     [property: string]: any;
// }

export interface roleAuthListType {
    createdAt: string;
    id: number;
    menu: Menu;
    role: Role;
    updatedAt: string;
}

export interface Menu {
    component: string;
    createdAt: string;
    icon: string;
    id: number;
    isParent: boolean;
    link: string;
    menuname: string;
    parentid: number;
    updatedAt: string;
}

export interface Role {
    createdAt: string;
    id: number;
    remark: string;
    rolename: string;
    updatedAt: string;
}