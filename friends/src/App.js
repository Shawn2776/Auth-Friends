import './App.css';
import {  Route, Link, Switch, useHistory} from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import FriendsList from './Components/FriendsList';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  // const history = useHistory();
  
  const logout = () => {
    localStorage.removeItem('token')
    // history.push('/login')
  }

  return (
    <div className="App">
    <ul>
      <li>
        <Link to='/login'>Log In</Link>
      </li>
      <li>
        <Link onClick={logout}>Log Out</Link>
      </li>
      <li>
        <Link to="/protected">Friends List</Link>
      </li>
    </ul>
     <div>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList}/>
        <Route path='/login' component={LoginForm}/>
      </Switch>
     </div>
    </div>
  );
}
export default App;