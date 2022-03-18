import React, {
    Component
} from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
        };

        // binding needed when this.changeValue is a ES5 method
        // this.changeValue = this.changeValue.bind(this);
    }

    //changeValue() { // ES5 method (no this context by default)

    changeValue = (action) => { // ES6 method

        this.setState((prevState, prevProps) => {


            let currentCounterValue = prevState.counterValue;


            if (action === 'add') {
                currentCounterValue += 1;

            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;

            } else {
                currentCounterValue = 0;
            }
            return ({
                counterValue: currentCounterValue

            });

        });

    }

    render() {

        return ( <
            div className = "counter" >
            Counter:
            <
            Display displayValue = {
                this.state.counterValue
            }
            />  <
            ButtonsPanel buttonMethod = {
                this.changeValue
            }
            /> <
            /div>
        );
    }
}

export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;