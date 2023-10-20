import React from "react";
import IMAGES from "../Images"
import { Cabana011, Domo011, Isla011, Montanas011 } from "./PlaceCard";
import "../styleSheets/places-info.css"

import { DateRangeComp, DateRangeCompToggle } from "./DateRangeComps";

function PlacesInfo () {
  return (
    <div class="container px-5">
      <div className="d-flex  p-0 pb-3">
        <p className="h3">La Casa Roja</p>
        <p className="ms-auto fw-medium"><i class="bi bi-heart me-2 mt-2"></i>Guardar</p>
      </div>
      <div class="row ">
        <div class="col-6 p-0">
          <img src={ IMAGES.Cabana011 } className="img-fluid rounded-start-4 w-100  p-0 " />
        </div>
        <div class="col-3 flex-column p-0 ps-2 ">
          <img src={ IMAGES.Cabana012 } className="img-fluid w-100 p-0" />
          <img src={ IMAGES.Cabana013 } className="img-fluid w-100 p-0 mt-2" />
        </div>
        <div class="col-3 flex-column p-0 ps-2 ">
          <img src={ IMAGES.Cabana014 } className="img-fluid w-100 p-0 img-end-top" />
          <img src={ IMAGES.Cabana015 } className="img-fluid w-100 p-0 mt-2 img-end-bottom" />
        </div>
      </div>
      <div className="container row">
        <div className="col-7">
          <div className="border-bottom mt-4">
            <p className="h3">Habitación en Sopó, Cundinamarca</p>
            <p className="m-0">2 Huéspedes &#183; 1 Habitación &#183; 1 Cama &#183; 1 Baño</p>
            <p className="fw-bold"><i class="bi bi-star-fill"></i> 4.5 &#183; 3 Reseñas</p>
          </div>

          <div className="border-bottom d-flex py-4">
            <div><i class="bi bi-person-circle fs-1 text-success m-0"></i></div>
            <div className="ms-3 py-2">
              <div className="fw-bold">Anfitrión: Johana Amaya</div>
              <div className="fw-light">3 años anfitrionando</div>
            </div>
          </div>
          
          <div className="border-bottom py-4">
            <div className=" d-flex py-2">
              <div className="d-flex align-items-center ">
                <div><i class="bi bi-key fs-3 "></i></div>
                <div className="ms-3 py-2">
                  <div className="fw-bold">!Una bienvenida agradable!</div>
                  <div className="fw-light">Los huespedes han valorado positivamente el recivimiento.</div>
                </div>
              </div>
            </div>
            <div className=" d-flex py-2">
              <div className="d-flex align-items-center ">
                <div><i class="bi bi-calendar-minus fs-3 justify-content-center "></i></div>
                <div className="ms-3 py-2">
                  <div className="fw-bold">Cancela un día antes</div>
                  <div className="fw-light">Puedes cancelar un día antes sin ningún tipo de penalización.</div>
                </div>
              </div>
            </div>
            <div className=" d-flex py-2">
              <div className="d-flex align-items-center ">
                <div><i class="bi bi-geo-alt fs-3"></i></div>
                <div className="ms-3 py-2">
                  <div className="fw-bold">¡Una locaclización espectacular!</div>
                  <div className="fw-light">Los huespedes han calificado la vista como maravillosa.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-bottom py-4">
            <p>La Casa Roja, un refugio hogareño enclavado en un tranquilo rincón, ofrece una experiencia campestre inigualable. Rodeada de majestuosas montañas, brinda impresionantes vistas panorámicas. Con una atmósfera acogedora y cálida, invita a la relajación y el descanso. Este idílico retiro ofrece la combinación perfecta de comodidad y serenidad en medio de la naturaleza. Perfecta para aquellos que buscan escapar del ajetreo y el bullicio de la vida cotidiana, la Casa Roja promete momentos de paz y conexión con el entorno natural. Un refugio auténtico y encantador que cautiva con su encanto rural y su entorno pintoresco.</p>
          </div>

          <div className="border-bottom py-4">
            <p className="h4 mb-4">¿Dónde vas a dormir?</p>
            <div class="card" style={{width: "10rem"}}>
              <div class="card-body">
                <div className="mb-4"><i class="bi bi-moon fs-3"></i></div>
                <p className="mb-1 fw-bold">Habitación</p>
                <p className="mb-1">1 cama doble</p>
              </div>
            </div>
          </div>

          <div className="border-bottom py-4">
            <p className="h4 mb-2">Lo que ofrece este lugar</p>
            <div className="row">
              <div className=" d-flex py-2 col-6">
                <div className="d-flex align-items-center ">
                  <i class="bi bi-wifi d-inline fs-3"></i>
                  <div className="ms-3 py-2 fw-normal">Wifi</div>
                </div>
              </div>
              <div className=" d-flex py-2 col-6">
                <div className="d-flex align-items-center ">
                <i class="bi bi-car-front-fill fs-3"></i>
                  <div className="ms-3 py-2 fw-normal">Estacionamiento gratuito: 1 puesto</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" d-flex py-2 col-6">
                <div className="d-flex align-items-center ">
                <i class="bi bi-snow fs-3"></i>
                  <div className="ms-3 py-2 fw-normal">Aire acondicionado</div>
                </div>
              </div>
              <div className=" d-flex py-2 col-6">
                <div className="d-flex align-items-center ">
                <i class="bi bi-flower1 fs-3"></i>
                  <div className="ms-3 py-2 fw-normal">Patio trasero</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" d-flex py-2 col-6">
                <div className="d-flex align-items-center ">
                <i class="bi bi-camera-video fs-3"></i>
                  <div className="ms-3 py-2 fw-normal">Cámaras de seguridad</div>
                </div>
              </div>
              <div className=" d-flex py-2 col-6">
                <div className="d-flex align-items-center ">
                <i class="bi bi-bandaid fs-3"></i>
                  <div className="ms-3 py-2 fw-normal">Primeros auxilios</div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendarios */}
          {/* <div className="border-bottom py-4 w-100">
            <div className="h4 mb-2">Selecciona la fecha de llegada</div>
            <div className="fw-light mb-3">Agrega las fechas del viaje para tener el precio exacto</div>
            <div className="row w-100 bg-light">
              <div className="col-6 table-responsive ">
                <table className="table table-borderless table-light">
                  <thead>
                    <tr>
                      <th colspan="7" className="fw-semibold text-center">Diciembre 2023</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <th class="fw-normal fs-days">Dom.</th>
                      <th class="fw-normal fs-days">Lun.</th>
                      <th class="fw-normal fs-days">Mar.</th>
                      <th class="fw-normal fs-days">Mié.</th>
                      <th class="fw-normal fs-days">Jue.</th>
                      <th class="fw-normal fs-days">Vie.</th>
                      <th class="fw-normal fs-days">Sáb.</th>
                    </tr>
                    <tr>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold">2</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">3</td>
                      <td class="fw-semibold">4</td>
                      <td class="fw-semibold">5</td>
                      <td class="fw-semibold">6</td>
                      <td class="fw-semibold">7</td>
                      <td class="fw-semibold">8</td>
                      <td class="fw-semibold">9</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">10</td>
                      <td class="fw-semibold">11</td>
                      <td class="fw-semibold">12</td>
                      <td class="fw-semibold">13</td>
                      <td class="fw-semibold">14</td>
                      <td class="fw-semibold">15</td>
                      <td class="fw-semibold">16</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">17</td>
                      <td class="fw-semibold">18</td>
                      <td class="fw-semibold">19</td>
                      <td class="fw-semibold">20</td>
                      <td class="fw-semibold">21</td>
                      <td class="fw-semibold">22</td>
                      <td class="fw-semibold">23</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">24</td>
                      <td class="fw-semibold">25</td>
                      <td class="fw-semibold">26</td>
                      <td class="fw-semibold">27</td>
                      <td class="fw-semibold">28</td>
                      <td class="fw-semibold">29</td>
                      <td class="fw-semibold">30</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">31</td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>

              <div className="col-6 table-responsive ">
              <table className="table table-borderless table-light">
                  <thead>
                    <tr>
                      <th colspan="7" className="fw-semibold text-center">Diciembre 2023</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="fw-normal fs-days">Dom.</th>
                      <th class="fw-normal fs-days">Lun.</th>
                      <th class="fw-normal fs-days">Mar.</th>
                      <th class="fw-normal fs-days">Mié.</th>
                      <th class="fw-normal fs-days">Jue.</th>
                      <th class="fw-normal fs-days">Vie.</th>
                      <th class="fw-normal fs-days">Sáb.</th>
                    </tr>
                    <tr>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold">2</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">3</td>
                      <td class="fw-semibold">4</td>
                      <td class="fw-semibold">5</td>
                      <td class="fw-semibold">6</td>
                      <td class="fw-semibold">7</td>
                      <td class="fw-semibold">8</td>
                      <td class="fw-semibold">9</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">10</td>
                      <td class="fw-semibold">11</td>
                      <td class="fw-semibold">12</td>
                      <td class="fw-semibold">13</td>
                      <td class="fw-semibold">14</td>
                      <td class="fw-semibold">15</td>
                      <td class="fw-semibold">16</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">17</td>
                      <td class="fw-semibold">18</td>
                      <td class="fw-semibold">19</td>
                      <td class="fw-semibold">20</td>
                      <td class="fw-semibold">21</td>
                      <td class="fw-semibold">22</td>
                      <td class="fw-semibold">23</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">24</td>
                      <td class="fw-semibold">25</td>
                      <td class="fw-semibold">26</td>
                      <td class="fw-semibold">27</td>
                      <td class="fw-semibold">28</td>
                      <td class="fw-semibold">29</td>
                      <td class="fw-semibold">30</td>
                    </tr>
                    <tr>
                      <td class="fw-semibold">31</td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                      <td class="fw-semibold"></td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>

            </div>
          </div> */}

          <div className="py-4">
            <DateRangeComp />
          </div>
          
        </div>

        {/* Div para stikcy bottom */}
        <div className="col-5">
          <div class="sticky-top reserve-box d-flex">
            <div className="ms-auto me-5 ">
              <div className="container mt-5 border ">
                <p><span className="h3">$195.000 COP</span> Noche</p>
                <p className="fw-bold"><i class="bi bi-star-fill"></i> 4.5 &#183; 3 Reseñas</p>
                <DateRangeCompToggle />
              </div>

            </div>
          </div>
        </div>
       
      </div>

        {/* Imagen que al quitar comentario hace que los amrgenes y paddings horizontales coincidan con Home */}
        {/* <img src={ IMAGES.Domo011 } class="" alt="..." /> */}     
    </div>
    
  );
}

export { PlacesInfo };