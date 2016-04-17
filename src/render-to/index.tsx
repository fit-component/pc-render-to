import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as module from './module'

export default class RenderTo extends React.Component<module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()
    private popups:any
    private selectorLength:any

    constructor(props:any) {
        super(props)
    }

    componentDidMount() {
        this.popups = []
        let selector = document.querySelectorAll(this.props.selector)
        Array.prototype.slice.call(selector).forEach((parent) => {
            let popup = document.createElement('div')
            parent.appendChild(popup)
            this.popups.push(popup)
        })

        this._renderLayer();
        this.selectorLength = selector.length
    }

    componentDidUpdate() {
        this._renderLayer();
    }


    componentWillUnmount() {
        this.popups.forEach((popup) => {
            ReactDOM.unmountComponentAtNode(popup)
        })
        let selector = document.querySelectorAll(this.props.selector)

        if (selector.length !== this.selectorLength) {
            console.warn('selector amount had been changed!')
        }

        Array.prototype.slice.call(document.querySelectorAll(this.props.selector)).forEach((parent) => {
            let popup = this.popups.shift()
            parent.removeChild(popup)
        })
    }


    _renderLayer() {
        this.popups.forEach((popup) => {
            ReactDOM.render(this.props['children'], popup)
        })
    }


    render() {
        return null
    }
}