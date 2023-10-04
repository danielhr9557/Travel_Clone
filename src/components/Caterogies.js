import React from "react";
import "../styleSheets/categories.css";
import { CategoriesCarousel } from "./CategoriesCarousel";

function Categories() {
  return(
    <div className="second-navbar d-flex mt-3 d-none d-md-flex ">
        <CategoriesCarousel />     

        {/* Filtros y precio sin impuestos */}
        <div className="d-flex align-items-center mx-auto">
          <div className="btn btn-outline-secondary btn-settings btn-filters d-flex align-items-center" >
            <i class="bi bi-sliders"></i>
            <span className="label-filters">
              Filtros
            </span>
              
          </div>

          <div className="btn btn-outline-secondary btn-settings btn-taxes d-flex align-items-center  ">
            <label className="form-check-label label-taxes text-nowrap" for="flexSwitchCheckDefault">Precio total sin impuestos</label>
            <div className="form-check form-switch d-flex">
              
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                
            </div>
          </div>
        </div>

      

    </div>
  );
}

export { Categories };