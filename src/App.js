import React from 'react';
import './App.css';
import Home from '../src/components/screens/Home'
import Category from '../src/components/screens/Category'
import Single from '../src/components/screens/Single'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/"> <Home/> </Route>
      <Route path="/category"> <Category/></Route>
      <Route path="/single"> <Single/> </Route>
      <Route path=""></Route>
      <Route path=""></Route>
    </BrowserRouter>
  );
}

export default App;
