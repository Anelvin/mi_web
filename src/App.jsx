import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skill from './pages/skill/Skill';
import Projects from './pages/projects/Projects';
import Wolly from './pages/wolly/Wolly';
import InOut from './pages/inout/InOut';
import WollyPro from './pages/wolly-pro/WollyPro';
import InOutMobile from './pages/inout-mobile/InOutMobile';
import WollyProWeb from './pages/wolly-pro-web/WollyProWeb';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/mi_web' exact component={Home}/>
        <Route path='/mi_web/about' exact component={About}/>
        <Route path='/mi_web/skill' component={Skill}/>
        <Route path='/mi_web/projects' component={Projects}/>
        <Route path='/mi_web/wolly' component={Wolly} />
        <Route path='/mi_web/inout' component={InOut}/>
        <Route path='/mi_web/wolly-pro' component={WollyPro} />
        <Route path='/mi_web/inout-mobile' component={InOutMobile} />
        <Route path='/mi_web/wolly-pro1' component={WollyProWeb} />
      </Switch>
    </Router>
  );
}

export default App;
