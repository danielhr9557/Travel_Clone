import React from "react";
import "../styleSheets/place-card.css";
import Cabana011 from "../Images/Cabana_011.png";
import Cabana012 from "../Images/Cabana_012.png";
import Cabana013 from "../Images/Cabana_013.png";

function PlaceCard () {
  return (
    <div class="card p-0 border-0 " style={{width: "18rem"}}>
      {/* <img src={Cabana011} class="card-img-top" alt="Cabana_011" /> */}
      <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner  ">
            <div class="carousel-item active ">
              <img src={Cabana011} class="img-height img-fluid  rounded-4 d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Cabana012} class="img-height img-fluid rounded-4 d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Cabana013} class="img-height img-fluid rounded-4 d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
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

export { PlaceCard };