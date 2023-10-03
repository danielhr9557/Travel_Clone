import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {  MixedLangRegCur } from './components/MixedLangRegCur';
import LanRegBottom from './components/LanRegBottom';
import CurrencyBottom from './components/CurrencyBottom';
import { SearchingBar } from './components/SearchingBar';
import { UserDropdown } from './components/UserDropdown';
import { Categories } from './components/Caterogies';
import { PlaceCard } from './components/PlaceCard';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md bg-light sticky-sm-top">
        <div className="container d-flex justify-content-between ">
          <a href="#" className="navbar-brand brand-name me-5 d-none d-md-block">Cloud</a>
              <form class="d-flex w-100 " role="search">
                <input class="form-control me-2 " type="search" placeholder="¿A dónde quieres ir?" aria-label="Search"/>
                <button class="btn btn-outline-success bg-success " type="submit"><i class="bi bi-search"></i></button>
              </form>
              <a href="#" className="text-decoration-none text-dark ps-2 text-nowrap d-none d-md-block ">Agrega tu espacio a Cloud</a>
              <MixedLangRegCur />
              <UserDropdown />
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-md bg-light ">
        <div className="container d-flex justify-content-between ">
          <a href="#" className="navbar-brand brand-name me-5">Cloud</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearchSettings">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSearchSettings">
            <ul className="navbar-nav ms-auto align-items-center w-100">
              <form class="d-flex w-100" role="search">
                <input class="form-control me-2" type="search" placeholder="¿A dónde quieres ir?" aria-label="Search"/>
                <button class="btn btn-outline-success bg-success" type="submit"><i class="bi bi-search"></i></button>
              </form>
              <a href="#" className="text-decoration-none text-dark ps-2 text-nowrap d-none d-md-block ">Agrega tu espacio a Cloud</a>
              <MixedLangRegCur />
              <UserDropdown />
            </ul>
          </div>
          
        </div>
        
      </nav> */}

      <div className="bg-primary d-md-none d-sm-block ">
        1
      </div>

    {/* Testing Area  */}
    
    {/* End of Testing Area */}

      {/* Separador del Body y Footer */}
      <div style={{height: '700px'}}></div>
      
      <footer>
        <div className="container d-flex align-items-center justify-content-center">
          <LanRegBottom />
          <CurrencyBottom />
        </div>
      </footer>
    </div>
  );
}

export default App;
