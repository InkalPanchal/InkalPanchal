import React from 'react'

export default class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isToggled:true
        }
        this.handleclick = this.handleclick.bind(this);
    }

    handleclick(){
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    render(){
        return (
            <button onClick={this.handleclick}>
                {this.state.isToggled ? 'ON' : 'OFF'}
            </button>
        )
    }
}