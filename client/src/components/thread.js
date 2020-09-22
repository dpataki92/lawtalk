import React, { Component } from 'react';

class Thread extends Component {
    render(){
        return(
            <React.Fragment>
                <MainPost/>
                <Replies />
            </React.Fragment>
        )
    }

}

export default Thread;