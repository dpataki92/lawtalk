import React from 'react';

const OutgoingMessage = (props) => {
    return(
        <div className="outgoing_msg">
        <div className="sent_msg">
            <p>{props.content}</p>
            <span className="time_date"> {props.messageTime}    |    {props.messageDate}</span> </div>
        </div>
    )
}

export default OutgoingMessage;