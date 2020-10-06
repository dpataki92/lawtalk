import React from 'react';
import { withRouter } from 'react-router';


const DeleteButton = props => {
    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`/api/${props.type}s/${props.postId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`}
          })
          .then(resp => resp.json())
          .then(function(json) {
            if (json.message === "success") {
                alert("You have deleted the post");
                props.history.push('/questions/all');
            } else {
                alert("Invalid data. Please try again.");
            }
          })
    }
    return(
        <button type="button" onClick={handleDelete} className="btn btn-danger"><i class="ion ion-md-create"></i> Delete</button>
    )
}

export default withRouter(DeleteButton);