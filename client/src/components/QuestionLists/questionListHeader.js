import React from 'react';

const QuestionListHeader = props => {
    return(
        <div className="card mb-3">
            <div className="card-header pl-0 pr-0">
                <div className="row no-gutters w-100 align-items-center">
                    <div className="col ml-3">Questions </div>
                    <div className="col-4 text-muted">
                        <div className="row no-gutters align-items-center">
                            <div className="col-4">Replies</div>
                            <div className="col-8">Last update</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionListHeader;