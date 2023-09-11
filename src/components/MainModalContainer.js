import React from "react";
import { Currency, LangRegion } from "./LangRegCur";


function MainModalContainer () {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MainModalContainer">
        ESP
      </button>

      <div className="modal fade" id="MainModalContainer" tabIndex="-1" aria-labelledby="MainModalContainerLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
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


    </div>
  )
}

export  {MainModalContainer};