export interface AreaItems{
    name:string,
    code:string,
    children?:AreaItems[]
}

export interface AreaData{
    code:string,
    name:string,
}