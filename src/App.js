import React from 'react'
import CardList from './Components/CardList'
import './App.css'
import { Switch,Route } from 'react-router-dom'
import Details from './Components/Details'
import Navbar  from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route path="/details/:id" component={Details} />
      </Switch>
      
    </div>
  );
}

export default App;
