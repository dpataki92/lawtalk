import React from 'react';

const Comment = (props) => {

    return(
        <div>
            <p>{props.commentCreator}, {props.creation}</p>
            <p>{props.content}</p>
            <hr className="m-0"/>
        </div>
    )
}

export default Comment;