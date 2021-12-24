import Header from './components/Header'
import Main from './components/Main'
import {randColor} from './simple_scripts/randcolor'


function App() {
  randColor();
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}


export default App;
