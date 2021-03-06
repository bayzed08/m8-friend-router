import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/friend/:friendId'>
          <FriendDetail/>
        </Route>
        <Route path='*'>
           <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
