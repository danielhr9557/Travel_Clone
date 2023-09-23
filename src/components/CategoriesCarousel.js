import React from "react";
import "../styleSheets/categories-carousel.css";

function CategoriesCarousel () {
  return (
    <div className="d-flex">
      
      <div id="carouselExample" className="carousel slide carousel-div d-flex ">

        <i class="bi bi-carousel-arrow bi-caret-left my-auto" data-bs-target="#carouselExample" data-bs-slide="prev"></i>

        <div className="carousel-inner carousel-div2 text-center d-flex">

          {/* Carousel items */}
          <div className="carousel-item active ">
            <div className="d-flex justify-content-center">
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-rocket-takeoff"></i>
                Impresionantes
              </div>
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-buildings"></i>
                Ciudades Famosas
              </div>
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-house"></i>
                Cabañas
              </div>
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-house"></i>
                Cabañas 2
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-house"></i>
                Cabañas 2
              </div>
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-house"></i>
                Cabañas 3
              </div>
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-house"></i>
                Cabañas 4
              </div>
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-house"></i>
                Cabañas 5
              </div>
            </div>
          </div>
        </div>
        
        <i class="bi bi-carousel-arrow bi-caret-right my-auto" data-bs-target="#carouselExample" data-bs-slide="next"></i>

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