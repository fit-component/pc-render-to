import * as React from 'react'

export interface PropsInterface {
    /**
     * 容器对象
     */
    selector?:string
    
    children?:React.ReactElement<any>

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