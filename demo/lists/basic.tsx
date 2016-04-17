import * as React from 'react'
import RenderTo from '../../src'
import Button from '../../../../pc/button'

export default class Demo extends React.Component<any,any> {
    constructor(props:any) {
        super(props)
    }

    render() {
        let boxStyle = {
            border: '1px solid #000',
            width: 200,
            minHeight: 100,
            margin: 10,
        }

        let containerStyle = {
            display: 'flex'
        }

        return (
            <div style={containerStyle}>
                <div style={boxStyle}
                     className="container-box">

                </div>
                <div style={boxStyle}
                     className="container-box">

                </div>
                <div style={boxStyle}
                     className="container-box">

                </div>
                <div style={boxStyle}
                     className="container-box">

                </div>
                <div style={boxStyle}
                     className="container-box">

                </div>


                <RenderTo selector=".container-box">
                    <Button>被渲染到了另一个地方</Button>
                </RenderTo>
            </div>
        )
    }
}