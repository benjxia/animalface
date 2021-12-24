import Header from './components/Header'
import Main from './components/Main'
import {randColor} from './simple_scripts/randcolor'


function App() {
  randColor(); //Sets background to random color
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}


export default App;
