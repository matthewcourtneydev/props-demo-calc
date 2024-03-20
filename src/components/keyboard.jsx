import React from 'react';

const Keyboard = (props) => {

    // You cannot manipulate data on this level the functionality must be in the root level to affext the state 
    // in the root level. 
    function thisWontWork(input) {
        props.propData = input
    }
    return (
        <div className="keyboard">
            {/* imporant note here. I must call functions passed via props with an arrow function ()=> research arrow functions to learn more. */}
            {/* They are basically one off functions you write without naming.  */}
            <button onClick={() => thisWontWork("Broken")}>This button will not work. Refresh the page when it breaks after you press it.</button>
            {/* These bottom buttons work fine and they manupulate the state. */}
            <button onClick={() => props.thisIsOurPropFunction("Middle Button Works")}>This button will update the new square to say "Middle Button Works"</button>
            <button onClick={() => props.thisIsOurPropFunction("Last Button Works")}>This button will update the new square to say "Last Button Works"</button>
        </div>
    );
}

export default Keyboard;
