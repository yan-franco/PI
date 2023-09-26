import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router'
// import {Home} from './pages/Home';
import allPokemons from './components/pokemons/Pokemons';
import Home from './pages/Home'
import {NotFound} from './pages/NotFound'
import { Form } from './components/Form/Form';
import { Redirect } from 'react-router';
import { Detail } from './components/CardDetail/Detail';


function App() {
  return (
    <div>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/pokemons' component={allPokemons}/>
          <Route exact path = '/create' component={Form}/>
          <Route exact path = "/pokemons/:id" component={Detail}/>
          <Route exact path = "/notFound" component={NotFound}/>
          <Redirect from='*' to='/notFound'/>
        </Switch>
      </div>
    </div>
  );
}

export default App;