import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import Product from './components/Product'

import {Home , SingleProduct , Cart , CheckOut , Error , About , PrivateRoute ,Products} from './pages'

function App() {
  return <Router>
    
    <Navbar/>
    <Sidebar/>

    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/about">
        <About/>
      </Route>

      <Route exact path="/cart">
        <Cart/>
      </Route>

      <Route exact path="/products">
        <Products/>
      </Route>

      <Route exact path="/products/:id" children ={<SingleProduct/>}>
      </Route>

      <Route exact path="/checkout">
        <CheckOut/>
      </Route>

      <Route exact path="*">
        <Error/>
      </Route>
    </Switch>
    <Footer/>
  </Router>
}

export default App
