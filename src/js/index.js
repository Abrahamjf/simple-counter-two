//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {Counter} from "./component/Counter.js"

// include your styles into the webpack bundle
import "../styles/index.css";

// function SimpleCounter (props){
//    return (

//      <div className = "big-box">
// 			<div className ="counter">
// 				<p>0</p>
// 			</div>
// 			<div className="four">{props.digitFour %10}</div>
// 			<div className="three">{props.digitThree %10}</div>
// 			<div className="two">{props.digitTwo %10}</div>
// 			<div className="one">{props.digitOne %10}</div>
// 		</div>
//    ); 
// }
// SimpleCounter.propTypes = {
//     digitFour: PropTypes.number,
//     digitThree:PropTypes.number,
//     digitThree:PropTypes.number,
//     digitOne:PropTypes.number
// };

// let counter = 0;
// setInterval(function(){
//     const one = Math.floor((counter/1000)%10);
//     const two =Math.floor((counter/100)%10);
//     const three = Math.floor((counter/10)%10);
//     const four =Math.floor((counter/1)%10);
//     console.log(one,two, three, four)
//     counter++;


//     ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />), document.querySelector("#app");

// },1000);


ReactDOM.render(<Counter />, document.querySelector("#app"));