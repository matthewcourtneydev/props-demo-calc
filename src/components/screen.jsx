import React from 'react';

// We pass our props into the functional component
const Screen = (props) => {
    return (
        <div className="screen">
            {/* You can see im the prop by the name we gave it in the app. not the name of the variable. */}
            <div className="inner">{props.thisIsOurPropData}</div>
        </div>
    );
}

export default Screen;
