import Header from './components/Header'
import Main from './components/Main'
import {randColor} from './simple_scripts/randcolor'

function App() {
  //Sets background and menu to random color
  var c = randColor();
  document.getElementById("main").style.backgroundColor = c;

  return ( //meat of the page
    <div className="App">
      <Main color = {c}/>
    </div>
  );
}


export default App;
