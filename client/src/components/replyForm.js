import React from 'react';

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

        let path; 
        if (this.state.type === "answer") {path = "answers"}
        else if (this.state.type === "comment") {path = "comments"}
        console.log(this.state)
        fetch(`/api/${path}`, {
            method: "POST",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`},
            body: JSON.stringify(this.state)
          })
          .then(resp => resp.json())
          .then(function(json) {
            if (json.message === "success") {
                window.location.reload(false)
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
                <div className="px-4 pt-3"> <button onClick={this.handleSubmit} type="button" className="btn btn-primary"><i className="ion ion-md-create"></i>&nbsp; Send</button> </div>
            </div>
        )
    }

}

export default ReplyForm;