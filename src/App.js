import './App.css';
// ** dont forget to import useState no npm required **
import { useState } from 'react';
// import our components
import Keyboard from './components/keyboard';
import Screen from './components/screen';

function App() {

  // Props cannot be passed upwards. Meaning a child element cannot send information back up the chain.
  // in this instance <Keyboard> and <Screen> can be passed info but you cannot send props back up to App (here)
  // So we need to define variables and their update functions at this level and pass the variables and functions as props.

  let [propData, setPropData] = useState("Hello World");

  function settingNewPropString(input) {
    setPropData((prev) => input)
  }

  return (
    <div className="App">
      {/* We name our prop "thisIsOurPropData then pass it the data "propData" which is our state */}
      <Screen thisIsOurPropData={propData}/>
      {/* We name our prop function similarly here. We pass it the function and notice we do not include the () otherwise this will happen on render */}
      <Keyboard thisIsOurPropFunction={settingNewPropString} propDataThatWillNotWork={propData}/>
    </div>
  );
}

export default App;
