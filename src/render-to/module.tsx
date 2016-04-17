export interface PropsInterface {
    /**
     * 容器对象
     */
    selector?:string

    [x:string]:any
}

export class Props implements PropsInterface {
    // @desc 容器对象
    selector='body'
}

export interface StateInterface {

}

export class State implements StateInterface {

}