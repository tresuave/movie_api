
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BloodBone from './components/BloodBone';
import Rambo from './components/Rambo';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <Nav />
    <div className="App">
      <Switch>
    <Route exact path="/" component={Home} />
     < Route path="/bloodbone" component={BloodBone} />
     < Route path ="/rambo" component={Rambo} />
     </Switch>

    </div>
   
    </Router>
  );
}
const Home = ()=> (
<div>
  <h1>This is the home page. Click on links to explore</h1>
</div>
)
  

export default App;
