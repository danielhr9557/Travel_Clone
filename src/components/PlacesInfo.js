import React from "react";
import IMAGES from "../Images"
import { Cabana011, Domo011, Isla011, Montanas011 } from "./PlaceCard";
import "../styleSheets/places-info.css"

function PlacesInfo () {
  return (
    <div class="container px-5">
      <div className="d-flex  p-0 pb-3">
        <p className="h3">La Casa Roja</p>
        <p className="ms-auto">Guardar</p>
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

        </div>

        {/* Div para stikcy bottom */}
        <div className="col-5">2</div>

      </div>

        {/* Imagen que al quitar comentario hace que los amrgenes y paddings horizontales coincidan con Home */}
        {/* <img src={ IMAGES.Domo011 } class="" alt="..." /> */}     
    </div>
    
  );
}

export { PlacesInfo };