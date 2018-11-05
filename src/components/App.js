import React from 'react';
import Header from './header';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Favorites from './Favorites';
import { NOTFOUND } from './NotFound';

const App =() => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route exact path ="/" component ={Home} />
    <Route path ="/Favorites" component = {Favorites} />
    <Route component ={NotFound}/>
    </Switch>
    </div>
    </BrowserRouter>
);

export default App;