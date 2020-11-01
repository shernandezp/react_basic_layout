import { BrowserRouter as Router, Route } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import React, { Component } from 'react' 
import Main  from './main' 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocalizeProvider>
          <Router>
            <Route path="/" component={Main} />
          </Router>
        </LocalizeProvider>
      </div>
     )
  };
}

export default App;