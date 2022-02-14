import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Til from './components/Til';
import Projects from './components/Projects';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route path='/til' component={Til}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Route component={() => <h1>NOT FOUND</h1>}></Route>
      </Switch>
    </div>
  );
}

export default App;
