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
import { Cabana011, Domo011, Isla011, Montanas011 } from './components/PlaceCard';
import { LangRegion, Currency } from './components/LangRegCur';
import IMAGES from "./Images"
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { PlacesInfo } from './components/PlacesInfo';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App bg-light">
      <nav className="navbar navbar-expand-md bg-light sticky-sm-top d-block ">
        <nav className="navbar navbar-expand-md pt-1 pb-2 border-bottom">
          <div className="container d-flex justify-content-between">
            <Link to="/" className="navbar-brand brand-name me-5 d-none d-md-block">ViajaEli</Link>
                <form class="d-flex w-100 " role="search">
                  <input class="form-control me-2 " type="search" placeholder="¿A dónde quieres ir?" aria-label="Search"/>
                  <button class="btn btn-outline-success bg-success " type="submit"><i class="bi bi-search"></i></button>
                </form>
                <a href="#" className="text-decoration-none text-dark ps-2 text-nowrap d-none d-md-block ">Agrega tu espacio a ViajaEli</a>
                <MixedLangRegCur />
                <UserDropdown />
          </div>
        </nav>

        {/* En el futuro crear function para esconder este div y que no se vea al abrir places info */}
        {/* <div className="navbar d-block pt-0">
          <div className="container ">
            <Categories />
          </div>
        </div> */}
      </nav>
      
      {/* Body */}
      <div className="pb-4">
        <div className="container pt-2">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/PlacesInfo" element={<PlacesInfo />}/>
          </Routes>
          

        </div>

        {/* <BodyPlacesCards /> */}


      </div>
           
      {/* --- MixedLangRegCur Modal Code */}
      <div className="modal fade" id="MixedLangRegCur" tabIndex="-1" aria-labelledby="MixedLangRegCurLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content ">
            {/* Modal Header */}
            <div className="modal-header ">
              <nav >
                <div className="nav nav-underline " id="nav-tab" role="tablist">
                                  
                  {/* Nuevos botones */}
                  <button className="nav-link active" aria-current="page" id="nav-lang-region-tab" data-bs-toggle="tab" data-bs-target="#nav-lang-region" type="button" role="tab" aria-controls="nav-lang-region" aria-selected="false">Idioma y Región</button>

                  <button className="nav-link" id="nav-currency-tab" data-bs-toggle="tab" data-bs-target="#nav-currency" type="button" role="tab" aria-controls="nav-currency" aria-selected="false">Moneda</button>
                  
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              </nav>

              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            
            {/* Contenido del modal */}
            <div className="modal-body"> 
              <nav>
                <div className="tab-content" id="nav-tabContent">
                  {/* Nuevos Divs */}
                  <div className="tab-pane fade active show" id="nav-lang-region" role="tabpanel" aria-labelledby="nav-lang-region-tab" tabindex="0" ><LangRegion/></div>
                  <div className="tab-pane fade" id="nav-currency" role="tabpanel" aria-labelledby="nav-currency-tab" tabindex="0"><Currency /></div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* --- MixedLangRegCur Modal Code End */}


    {/* Testing Area  */}

    {/* End of Testing Area */}

      {/* Separador del Body y Footer */}
      {/* <div style={{height: '700px'}}></div> */}
      
      <footer className="footer pt-3 pb-4 border-top">
        <div className="container d-flex align-items-center ">
          <p className="fw-normal m-0">&copy; 2023 ViajaEli, Inc.</p>
          <div className="ms-auto">
            <MixedLangRegCur />
          </div>
          <LanRegBottom />
          <CurrencyBottom />
        </div>
      </footer>
    </div>
  );
}

export default App;
