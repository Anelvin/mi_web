import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skill from './pages/skill/Skill';
import Projects from './pages/projects/Projects';
import Wolly from './pages/wolly/Wolly';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/mi_web' exact component={Home}/>
        <Route path='/mi_web/about' exact component={About}/>
        <Route path='/mi_web/skill' component={Skill}/>
        <Route path='/mi_web/projects' component={Projects}/>
        <Route path='/mi_web/wolly' component={Wolly} />
      </Switch>
    </Router>
  );
}

export default App;
