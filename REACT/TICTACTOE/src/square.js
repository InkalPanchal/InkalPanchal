import React from "react";

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:null
        }
    }
    render(){
        return (
            // <button className="square" 
            // onClick={()=>this.setState({value: 'X'})}>
            //     {this.state.value}
            // </button>

            <button className="square" 
            onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;