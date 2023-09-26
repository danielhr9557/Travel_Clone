import React from "react";
import "../styleSheets/categories-carousel.css";

function CategoriesCarousel () {
  return (
    <div className="d-flex">
      
      <div className="d-flex justify-content-center">
        <div className="btn btn-style btn-first d-flex flex-column " >
          <i className="bi bi-carousel bi-rocket-takeoff"></i>
          Impresionantes
        </div>
        <div className="btn btn-style d-flex flex-column " >
          <div class="bi bi-carousel">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mountain" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z" />
              <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2" />
            </svg>
          </div>
          Montaña
        </div>
        <div className="btn btn-style d-flex flex-column " >
          <div class="bi bi-carousel">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-eco" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" />
              <path d="M16 22s0 -2 3 -4" />
              <path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z" />
            </svg>
          </div>
          Naturaleza
        </div>
        <div className="btn btn-style d-flex flex-column text-nowrap" >
          <i className="bi bi-carousel bi-buildings"></i>
          Ciudades Famosas
        </div>
        <div className="btn btn-style d-flex flex-column " >
          <div class="bi bi-carousel">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-cottage" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 21l18 0" />
              <path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" />
              <path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" />
            </svg>
          </div>
          Granja
        </div>
        <div className="btn btn-style d-flex flex-column text-nowrap" >
          <i className="bi bi-carousel bi-house"></i>
          Cabañas alejadas
        </div>
        
        <div className="btn btn-style d-flex flex-column " >
          <i class="bi bi-carousel bi-snow"></i>
          Nieve
        </div>
        <div className="btn btn-style d-flex flex-column " >
          <div className="bi bi-carousel">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ufo" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 2.367 -4.48 4.276 -10 4.276s-10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724" />
              <path d="M7 9c0 1.105 2.239 2 5 2s5 -.895 5 -2v-.035c0 -2.742 -2.239 -4.965 -5 -4.965s-5 2.223 -5 4.965v.035" />
              <path d="M15 17l2 3" />
              <path d="M8.5 17l-1.5 3" />
              <path d="M12 14h.01" />
              <path d="M7 13h.01" />
              <path d="M17 13h.01" />
              </svg>
          </div>
          Impresionantes
        </div>
        
        <div className="btn btn-style d-flex flex-column text-nowrap" >
          <i className="bi bi-carousel bi-tsunami"></i>
          Frente a la playa
        </div>
        <div className="btn btn-style d-flex flex-column " >
          <div class="bi bi-carousel">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-tunnel" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2z" />
              <path d="M8 21v-9a4 4 0 1 1 8 0v9" />
              <path d="M3 17h4" />
              <path d="M17 17h4" />
              <path d="M21 12h-4" />
              <path d="M7 12h-4" />
              <path d="M12 3v5" />
              <path d="M6 6l3 3" />
              <path d="M15 9l3 -3l-3 3z" />
            </svg>
          </div>
          Cueva
        </div>
        
      </div>


      {/* Old Carousel */}
      {/* <div id="carouselExample" className="carousel slide carousel-div d-flex ">

        <i class="bi bi-carousel-arrow bi-caret-left my-auto" data-bs-target="#carouselExample" data-bs-slide="prev"></i>

        <div className="carousel-inner carousel-div2 text-center d-flex">

  
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
                Cabañas alejadas
              </div>
              <div className="btn btn-style d-flex flex-column " >
                <i className="bi bi-carousel bi-tsunami"></i>
                Playa
              </div>
              <div className="btn btn-style d-flex flex-column " >
                <i class="bi bi-carousel bi-snow"></i>
                Nieve
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

      </div> */}




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