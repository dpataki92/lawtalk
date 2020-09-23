import React from 'react';

const UserRow = (props) => {

    return(
        <div className="comment-widgets m-b-20">
        <div className="d-flex flex-row comment-row">
            <div className="p-2"><span className="round"><img src={`/${props.avatar}`} alt="topuser" width="50"/></span></div>
            <div className="comment-text w-100 mt-2">
                <h6>{props.username}</h6>
                <div className="comment-time"> <span className="label label-success">{`+${props.upvotes} upvotes`}</span> <span className="action-icons"> </span> </div>
                <p>{props.location} * {props.fields}</p>
            </div>
        </div>
        </div>
    )
}

export default UserRow;