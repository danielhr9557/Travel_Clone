import React from "react";
import Currency from "./Currency";

function LangAndReg () {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        ESP
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <nav>
                <div className="nav nav-underline" id="nav-tab" role="tablist">
                  <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Idioma y Región</button>
                  <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Moneda1</button>
                  
                  {/* Nuevos botones */}
                  <button className="nav-link" id="nav-currency-tab" data-bs-toggle="tab" data-bs-target="#nav-currency" type="button" role="tab" aria-controls="nav-currency" aria-selected="false">Moneda</button>
                </div>
              </nav>

              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            
            {/* Contenido del modal */}
            <div className="modal-body">
              
              <nav>
                <div className="tab-content" id="nav-tabContent">


                  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">123</div>
                  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">456</div>
                  
                  {/* Nuevos Divs */}
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

export default LangAndReg;