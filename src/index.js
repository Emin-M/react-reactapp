// import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Cd from "./CommentDetail";
import Approval from "./ApprovalCard";

// Create a react component
const App = () => {
    return (
    <div className="container">
       <Approval>
        <h3 className="bg-warning p-2 pl-5">Warning!!!</h3>
        <div className="p-2" style={{fontSize:'20px'}}>Are You Sure To Do This?</div>
       </Approval>
       <Approval>
         <Cd 
          author="Emin"
          time="6:00PM"
          comment="Nice Work"
          />
       </Approval>
       <Approval>
          <Cd 
           author="Tacir"
           time="6:42PM"
           comment="My dick more beautiful lol"
           />
       </Approval>
       <Approval>
          <Cd 
          author="Omer"
          time="7:30PM"
          comment="Good Luck Man"
          />
       </Approval>
     </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render( <App /> , document.querySelector('#root'));