
import './css-files/App.css';
import {Controller, Scene} from "react-scrollmagic";
import StyleWipe2 from './examples/style-wipes-2.js';
import Parrallax from './examples/parrallax.js';
import Components from './examples/components.js';
import CoverHeader from './BlogComponents/coverHeader.js';
// import SplitText from './examples/split-text.js';
// import List from './examples/list.js';

function App() {
  return (
    <div className="App">
        <CoverHeader></CoverHeader>
    	<div>
        <Controller>
          <Scene duration={600} indicators={true} pin>
            <div>Sticky Example</div>
          </Scene>
          <Scene duration={900} indicators={true} pin>
            <div>Example 2</div>
          </Scene>
         </Controller>
       </div>
      <div> 
        <Controller> 
          <Scene duration={900} indicators={true} pin>
            <div>Other</div>
          </Scene>
        </Controller> 
      </div>
    <StyleWipe2></StyleWipe2>
    <Parrallax></Parrallax>
    <Components></Components>
    {/* <SplitText></SplitText> */}
    {/* <List></List> */}
    </div>
  );
}

export default App;
