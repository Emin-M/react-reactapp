import React from "react";

const CommDeta = props => {
    return (
    <div className="media">
        <img className="m-2" src="https://via.placeholder.com/64" alt="avatar"/>
        <div className="media-body">
            <h4>{props.author}  <span style={{opacity:'0.6'}}>{props.time}</span></h4>
            <p>{props.comment}</p>
        </div>
     </div>
    )
}
export default CommDeta; 




