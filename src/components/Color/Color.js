import { Component } from 'react'

class Color extends Component {
    render() {
        return (
            <div style={{color: `${this.props.color}`}}>{this.props.children}</div>
        )
    }
}

export default Color