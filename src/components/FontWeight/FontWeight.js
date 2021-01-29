import { Component } from 'react'

class FontWeight extends Component {
    render() {
        return (
            <div style={{fontWeight: `${this.props.fontWeight}`}}>{this.props.children}</div>
        )
    }
}

export default FontWeight