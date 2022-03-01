import React, {Component} from 'react';
import './Counter.css';
import Display from './Display';

class Counter extends Component {

constructor(props) {
super(props);

this.state = {
  counterValue: this.props.initValue
};

  }
  

  changeValue = () => {
    this.setState((prevState) => {
      return ({
        counterValue: prevState.counterValue + 1
      });
    });
    //console.log(`changeValue clicked`);

  }

  render() {
    
    return ( 
    <div className = "counter">
      Counter:
      <Display/>
      <button onClick={this.changeValue}>
        Add 1
      </button>
      </div>


    );
  }
}


export default Counter;


/* function Counter(props) {


let randomNumber = Math.floor(Math.random() * (108 - 1 + 1)+1);

return (
 <div className="counter">
 Counter:
<span className="value">
 {props.initValue}
 </span>
 </div>


 );
}
  */