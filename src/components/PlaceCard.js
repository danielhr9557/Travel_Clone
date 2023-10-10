import React from "react";
import "../styleSheets/place-card.css";
import IMAGES from "../Images"
import { Link , Routes, Route, Outlet } from 'react-router-dom';
import { PlacesInfo } from "./PlacesInfo.js";

function Cabana011 () {
  return (
    <div class="card p-0 border-0 " style={{width: "18rem"}}>
      {/* <img src={Cabana011} class="card-img-top" alt="Cabana_011" /> */}
      <div id="carouselCabana011" class="carousel slide">
          <div class="carousel-inner  ">
            <div class="carousel-item active ">
              <Link to="/PlacesInfo">
                <img src={ IMAGES.Cabana011 } class="img-height rounded-4 d-block w-100" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
            <Link to="/PlacesInfo">
              <img src={ IMAGES.Cabana012 } class="img-height rounded-4 d-block w-100" alt="..." />
            </Link>
            </div>
            <div class="carousel-item">
            <Link to="/PlacesInfo">
              <img src={ IMAGES.Cabana013 } class="img-height rounded-4 d-block w-100" alt="..." />
            </Link>
            {/* <Routes>
              <Route path="/PlacesInfo" element={<PlacesInfo />}/>
            </Routes> */}
          
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselCabana011" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselCabana011" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


      <div class="card-body">
        <p className="m-0 h6">Tunja, Boyacá</p>
        <p className="m-0 fw-light">Huesped Ramiro Amaya</p>
        <p className="card-text "><span className="fw-medium">$125.345 COP</span> noche</p>
      </div>

      {/* Hello world!
      <Link to="/About">About</Link>
      <Link to="/Vans">Vans</Link>
  
      <Routes>
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />}/>
      </Routes> */}
    </div>
  );
}

function Domo011 () {
  return (
    <div class="card p-0 border-0 " style={{width: "18rem"}}>
      {/* <img src={Cabana011} class="card-img-top" alt="Cabana_011" /> */}
      <div id="carouselDomo011" class="carousel slide">
          <div class="carousel-inner  ">
            <div class="carousel-item active ">
              <img src={ IMAGES.Domo011 } class="img-height  rounded-4 d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ IMAGES.Domo012 } class="img-height rounded-4 d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ IMAGES.Domo013 } class="img-height rounded-4 d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselDomo011" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselDomo011" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


      <div class="card-body">
        <p className="m-0 h6">Tunja, Boyacá</p>
        <p className="m-0 fw-light">Huesped Ramiro Amaya</p>
        <p className="card-text "><span className="fw-medium">$125.345 COP</span> noche</p>
      </div>
    </div>
  );
}

function Isla011 () {
  return (
    <div class="card p-0 border-0 " style={{width: "18rem"}}>
      {/* <img src={Cabana011} class="card-img-top" alt="Cabana_011" /> */}
      <div id="carouselIsla011" class="carousel slide">
          <div class="carousel-inner  ">
            <div class="carousel-item active ">
              <img src={ IMAGES.Isla011 } class="img-height  rounded-4 d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ IMAGES.Isla012 } class="img-height rounded-4 d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ IMAGES.Isla013 } class="img-height rounded-4 d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselIsla011" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselIsla011" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


      <div class="card-body">
        <p className="m-0 h6">Tunja, Boyacá</p>
        <p className="m-0 fw-light">Huesped Ramiro Amaya</p>
        <p className="card-text "><span className="fw-medium">$125.345 COP</span> noche</p>
      </div>
    </div>
  );
}

function Montanas011 () {
  return (
    <div class="card p-0 border-0 " style={{width: "18rem"}}>
      {/* <img src={Cabana011} class="card-img-top" alt="Cabana_011" /> */}
      <div id="carouselMontanas011" class="carousel slide">
          <div class="carousel-inner  ">
            <div class="carousel-item active ">
              <img src={ IMAGES.Montanas011 } class="img-height  rounded-4 d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ IMAGES.Montanas012 } class="img-height rounded-4 d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ IMAGES.Montanas013 } class="img-height rounded-4 d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselMontanas011" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselMontanas011" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


      <div class="card-body">
        <p className="m-0 h6">Tunja, Boyacá</p>
        <p className="m-0 fw-light">Huesped Ramiro Amaya</p>
        <p className="card-text "><span className="fw-medium">$125.345 COP</span> noche</p>
      </div>
    </div>
  );
}

export { Cabana011, Domo011, Isla011, Montanas011 };