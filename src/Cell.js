import React, { Component } from 'react'

export default class Cell extends Component {

    state = {
        color: this.props.value
    }


    render() {
        console.log(this.props)
        return (
            <div onClick ={ () => {this.setState({color: '#333'})}} className="cell" style={{backgroundColor: this.state.color}}>

            </div>
        )
    }
}