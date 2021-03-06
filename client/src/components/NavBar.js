import React from "react";
import "../Styles/Home.css"
import SearchBar from "./searchbar";
import { Link } from 'react-router-dom'


export const NavBar = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <SearchBar />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to={`/`} >
              <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={`/Catalogue`} >
              <a class="nav-link" >Catalogo</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={`/signin/`} >
              <a class="nav-link" >Iniciar sesión/Registrarse</a>
            </Link>
          </li>

        </ul>
        <div class='cart'>
          <a class='derecho'>
            <Link to={`/carrito`} >
              <ion-icon name="cart"></ion-icon>Carrito<span></span>
            </Link>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;