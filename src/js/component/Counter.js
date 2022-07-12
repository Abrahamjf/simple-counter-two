import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export const Counter= (props) =>{
    return (
        <div className = "big-box">
        <div className ="counter">
            <p>0</p>
        </div>
        <div className="four">{props.digitOne}</div>
        <div className="three">{props.digitTwo}</div>
        <div className="two">{props.digitThree}</div>
        <div className="one">{props.digitFour}</div>
    </div>
    );
}

// function SimpleCounter (props){
//     return (
 
//       <div className = "big-box">
//              <div className ="counter">
//                  <p>0</p>
//              </div>
//              <div className="four">{props.digitFour %10}</div>
//              <div className="three">{props.digitThree %10}</div>
//              <div className="two">{props.digitTwo %10}</div>
//              <div className="one">{props.digitOne %10}</div>
//          </div>
//     ); 
//  }

 Counter.propTypes = {
     digitFour: PropTypes.number,
     digitThree:PropTypes.number,
     digitThree:PropTypes.number,
     digitOne:PropTypes.number
 };
 
 let count = 0;
 setInterval(function(){
     const one = Math.floor((count/1000)%10);
     const two =Math.floor((count/100)%10);
     const three = Math.floor((count/10)%10);
     const four =Math.floor((count/1)%10);
     console.log(one,two, three, four)
     count++;
     
     ReactDOM.render(<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector("#app"));
 },1000);