import Header from './components/Header'
import Main from './components/Main'
import {randColor} from './simple_scripts/randcolor'
import ScanMenu from './components/ScanMenu'


function App() {
  var c = randColor(); //Sets background and menu to random color
  document.getElementById("main").style.backgroundColor = c;
  return (
    <div className="App">
      <Header />
      <Main color = {c}/>
    </div>
  );
}


export default App;
