import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, About, Works, Exhibition } from "./pages";


import './App.scss';


class App extends React.Component {
  render() {
    return (      
        <Router>
          <Route path="/" exact component={Main} />         
          <Route path="/about" exact component={About} />         
          <Route path="/works" exact component={Works} />         
          <Route path="/exhibition" exact component={Exhibition} />         
               
        </Router>
    
    ); 
  }
}

export default App;