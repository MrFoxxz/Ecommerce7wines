import React from 'react';
import Producto  from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Catalogo from "./components/Catalogo.js"
import { Route } from "react-router-dom"
import Result from "./containers/result.js"



function App() {
  return (
    <BrowserRouter>
      <Home />

      <Route
        exact path='/result/:id'  
        render={({match}) => <Result props={match.params.id} />}
      />

      <Route
         path="/" component={NavBar}/>
      <Route
        exact path='/products/:id'  
        render={({match}) => <Producto props={match.params.id} />}
      />
      <Route exact path="/products" component={Catalogo}/>
    </BrowserRouter>


  );
}

export default App;


