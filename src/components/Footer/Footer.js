import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='question-container'>
            <div className="que-ans" >
                <h2><span style={{color:'red'}}>How React Works?</span></h2>
                <p>First of all React is a JavaScript library not a framework of JavaScript. React uses a declarative UI or paradigm that splits into  components. 
                    Every time, when a data is changing, it creates a virtual DOM which is actually a DOM tree in JavaScript to compare with the real/browser DOM.
                     Then the React/virtual DOM make the right changes in the cost efficient way to update the browser DOM.
                     React work in a unidirectional data flow system and it follows the diff algorithm pattern.</p>
            </div>
            <div className="que-ans">
                <h2><span style={{color:'red'}}>How UseState() Works? </span></h2>
                <p>useState() is one the Hooks in React and it is a functional component. It allows us to have the state variables in a functional component.
                    Basically a component is function, and useState hook is a special function that which will accept a initial state or value and will return two values in a array.
                    One is the current state and  the other one is a function. Every time the function returns a value, then it will be stored in the initial value of the state.

                </p>
            </div>
        </div>
    );
};

export default Footer;