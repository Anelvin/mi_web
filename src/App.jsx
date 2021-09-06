import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skill from './pages/skill/Skill';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/mi_web' exact component={Home}/>
        <Route path='/mi_web/about' exact component={About}/>
        <Route path='/mi_web/skill' component={Skill}/>
      </Switch>
    </Router>
  );
}

export default App;
