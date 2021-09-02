import logo from './logo.svg';
import './App.css';
import { HashRouter, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/mi_web' exact component={Home}/>
        <Route path='/mi_web/about' exact component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
