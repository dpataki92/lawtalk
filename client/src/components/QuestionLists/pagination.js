import React from 'react';

const Pagination = props => {
    
    const handleScroll = (e) => {
        e.preventDefault();
        if (e.target.id === "scrollLeft" && !e.target.classList.contains("disabled")) {
            document.querySelectorAll(".pageNum").forEach((el) => {
                el.innerText = parseInt(el.innerText) - 3
            })
            e.target.parentNode.classList += " disabled";
            document.getElementById("scrollRight").parentNode.classList = "page-item";
        } else if (e.target.id === "scrollRight" && !e.target.classList.contains("disabled")) {
            document.querySelectorAll(".pageNum").forEach((el) => {
                el.innerText = parseInt(el.innerText) + 3
            })
            e.target.parentNode.classList += " disabled";
            document.getElementById("scrollLeft").parentNode.classList = "page-item";
        }
    }

    return(
        <nav>
            <ul className="pagination mb-5">
                <li className="page-item disabled" ><a onClick={handleScroll} id="scrollLeft" className="page-link" href="javascript:void(0)" data-abc="true">«</a></li>
                <li className="page-item active" id="firstPage"><a className="page-link pageNum" href="javascript:void(0)" data-abc="true" onMouseEnter={props.handlePageChangeOnEnter} onMouseLeave={props.handlePageChangeOnLeave} onClick={props.getQuestionsBasedOnPageNumber}>1</a></li>
                <li className="page-item"><a className="page-link pageNum" href="javascript:void(0)" data-abc="true" onMouseEnter={props.handlePageChangeOnEnter} onMouseLeave={props.handlePageChangeOnLeave} onClick={props.getQuestionsBasedOnPageNumber}>2</a></li>
                <li className="page-item"><a className="page-link pageNum" href="javascript:void(0)" data-abc="true" onMouseEnter={props.handlePageChangeOnEnter} onMouseLeave={props.handlePageChangeOnLeave} onClick={props.getQuestionsBasedOnPageNumber}>3</a></li>
                <li className="page-item" ><a onClick={handleScroll} id="scrollRight" className="page-link" href="javascript:void(0)" data-abc="true">»</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;

