//获取菜单数据类型
export type MenuParamsListType= {
    code: number;
    data: Datum[];
    msg: string;
}

export type Datum = {
    children: Child[];
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

export type Child = {
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