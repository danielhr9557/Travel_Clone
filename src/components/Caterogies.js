import React from "react";
import "../styleSheets/categories.css";
import { CategoriesCarousel } from "./CategoriesCarousel";

function Categories() {
  return(
    <div className="container second-navbar">
      <div className="d-flex align-items-center">
        <CategoriesCarousel />

        {/* <div className="d-flex ">
          

          <div className="btn d-flex flex-column" >
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
          </div>

        </div> */}


        

        {/* Filtros y precio sin impuestos */}
        <div className="btn btn-outline-secondary btn-settings d-flex align-items-center" >
          <i class="bi bi-sliders"></i>
            Filtros
        </div>

        <div className="btn btn-outline-secondary btn-settings d-flex align-items-center ml-auto">
          <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label class="form-check-label" for="flexSwitchCheckDefault">Precio total sin impuestos</label>
          </div>
        </div>

      </div>

    </div>
  );
}

export { Categories };