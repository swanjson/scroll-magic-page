import logo from './logo.svg';
import './css-files/App.css';
import {Controller, Scene} from "react-scrollmagic";
import StyleWipe2 from './examples/style-wipes-2.js';
import Parrallax from './examples/parrallax.js';
// import SplitText from './examples/split-text.js';
// import List from './examples/list.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    	<div>
        <Controller>
          <Scene duration={600} pin>
            <div>Sticky Example</div>
          </Scene>
          <Scene duration={900} pin>
            <div>Example 2</div>
          </Scene>
         </Controller>
       </div>
      <div> 
        <Controller> 
          <Scene duration={900} pin>
            <div>Other</div>
          </Scene>
        </Controller>
      </div>
    <StyleWipe2></StyleWipe2>
    <Parrallax></Parrallax>
    {/* <SplitText></SplitText> */}
    {/* <List></List> */}
    </div>
  );
}

export default App;
