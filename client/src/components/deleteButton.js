import React from 'react';

const EditButton = props => {
    const handleDelete = () => {
        "something"
    }
    return(
        <button type="button" onClick={handleDelete} className="btn btn-danger"><i class="ion ion-md-create"></i>&nbsp; Delete</button>
    )
}

export default EditButton;