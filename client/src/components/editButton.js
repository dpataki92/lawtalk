import React from 'react';
import { Link } from 'react-router-dom';

const EditButton = props => {

    return(
        <Link to={`/questions/${props.postId}/edit`}><button type="button" className="btn btn-danger"><i class="ion ion-md-create"></i>&nbsp; Edit</button></Link>
    )
}

export default EditButton;