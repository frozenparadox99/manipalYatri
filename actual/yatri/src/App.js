import React,{Component} from 'react';
import "@blueprintjs/core/lib/css/blueprint.css";
import './App.css';
import Main from './Main';
import Navigation from './Navigation';
import Page from './Page';
import {Switch,Route} from 'react-router-dom'; 

class App extends Component {
  render() {
  return (
    <div id="application">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/flight/:name" render={(rpr) => <Page />} />
      </Switch>
    </div>
  );
  }
}

export default App;
