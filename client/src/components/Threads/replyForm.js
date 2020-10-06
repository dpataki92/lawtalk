import React from 'react';
import { withRouter } from 'react-router';


class ReplyForm extends React.Component {
    state = {
        content: "",
        type: this.props.type,
        postId: this.props.postId,
        currentUser: this.props.currentUser
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let props = this.props;
        let path; 
        if (this.state.type === "answer") {path = "answers"}
        else if (this.state.type === "comment") {path = "comments"}
        fetch(`/api/${path}`, {
            method: "POST",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`},
            body: JSON.stringify(this.state)
          })
          .then(resp => resp.json())
          .then(function(json) {
            if (json.message === "success") {
                props.renderOnUpdate();
            } else {
                alert("Invalid data. Please try again.")
            }
          })
    }

    render() {
        return(
            <div class="form-group" style={{marginTop: "10px"}}>
                <label for="description">Response </label>
                <textarea rows="5" class="form-control" name="content" onChange={this.handleChange} value={this.state.content} ></textarea>
               <button style={{marginTop: "5px"}} onClick={this.handleSubmit} type="button" className="btn btn-primary"><i className="ion ion-md-create"></i> Send</button>
            </div>
        )
    }

}

export default withRouter(ReplyForm);