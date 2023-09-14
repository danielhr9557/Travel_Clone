import React from "react";
import "../styleSheets/categories-carousel.css";

function CategoriesCarousel () {
  return (
    <div className="d-flex">

      <div id="carouselExample" className="carousel slide carousel-div ">
        <div className="carousel-inner carousel-div2 text-center">

          {/* Carousel items */}
          <div className="carousel-item active ">
            <div className="btn d-flex flex-column" >
              <i className="bi bi-rocket-takeoff"></i>
              Impresionantes
            </div>
          </div>
          <div className="carousel-item">
            <div className="btn d-flex flex-column" >
              <i className="bi bi-buildings"></i>
              Ciudades Famosas
            </div>
          </div>
          <div className="carousel-item">
            <div className="btn d-flex flex-column" >
              <i className="bi bi-house"></i>
              Cabañas
            </div>
          </div>
          <div className="carousel-item">
            <div className="btn d-flex flex-column" >
              <i className="bi bi-house"></i>
              Cabañas 2
            </div>
          </div>
          <div className="carousel-item">
            <div className="btn d-flex flex-column" >
              <i className="bi bi-house"></i>
              Cabañas 3
            </div>
          </div>
          <div className="carousel-item">
            <div className="btn d-flex flex-column" >
              <i className="bi bi-house"></i>
              Cabañas 4
            </div>
          </div>
        </div>
        <button className="btn btn-primary carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="btn btn-primary carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>




      {/* Categories */}

      {/* <div className="btn d-flex flex-column" >
        <i class="bi bi-rocket-takeoff"></i>
          Impresionantes
      </div>
      <div className="btn d-flex flex-column" >
        <i class="bi bi-buildings"></i>
          Ciudades Famosas
      </div>
      <div className="btn d-flex flex-column" >
        <i class="bi bi-house"></i>
          Cabañas
      </div>
      <div className="btn d-flex flex-column" >
        <i class="bi bi-house"></i>
          Cabañas
      </div>
      <div className="btn d-flex flex-column" >
        <i class="bi bi-house"></i>
          Cabañas
      </div> */}

    </div>
  );
}

export { CategoriesCarousel }; 