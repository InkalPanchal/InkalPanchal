
import Mailbox from './Mailbox';
import React from 'react';
export default class SendMail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [""]
        }
    }
    
    render(){
        return (
            <div>
                <input type="text" onChange={(e)=>this.setState({messages:e.target.value})} />
                {/* <button onClick={}>Send</button> */}
                <Mailbox unreadMessages={this.state.messages} />
            </div>
        )
    }
}