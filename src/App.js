import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router';

class App extends React.Component {
  

  render() {
   
    return (

      <div >
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
