import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/GitHub/Main';
import Data from './Components/GitHub/Data';
import Specific from './Components/GitHub/Specific';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

// store
import { createStore } from 'redux';
import rootReducer from './Store/Reducers';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { };

    // create store
    this.Store = createStore(
      rootReducer,
      window.__REDUX_DEVTool_EXTENSION__&&
      window.__REDUX_DEVTool_EXTENSION__()
    );
  } 

  render(){
    return (
      <React.Fragment>
        <Provider store={this.store}>
          <Nav store={this.store}/>
          <Router>
            <Route exact path='/' component={Main} />
            <Route exact path='/Data/:id' component={Data} />
            <Route exact path='/Specific/:login' component={Specific} />
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
