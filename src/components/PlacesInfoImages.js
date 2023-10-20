import React from "react";
import IMAGES from "../Images"
import "../styleSheets/places-info.css"
import { perks } from "./Perks";

export function PLacesInfoImages (props) {
  return (
    <div class="row ">
    <div class="col-6 p-0">
      <img src={ IMAGES[props.img1] } className="img-fluid rounded-start-4 w-100  p-0 " />
    </div>
    <div class="col-3 flex-column p-0 ps-2 ">
      <img src={ IMAGES[props.img2] } className="img-fluid w-100 p-0" />
      <img src={ IMAGES[props.img3] } className="img-fluid w-100 p-0 mt-2"  />
    </div>
    <div class="col-3 flex-column p-0 ps-2 ">
      <img src={ IMAGES[props.img4] } className="img-fluid w-100 p-0 img-end-top" />
      <img src={ IMAGES[props.img5] } className="img-fluid w-100 p-0 mt-2 img-end-bottom" />
    </div>
  </div>
  );
}

export function PlacesInfoSummary (props) {
  return (
    <div className="border-bottom mt-4">
      <p className="h3">{props.location}</p>
      <p className="m-0">{props.guests} &#183; {props.rooms} &#183; {props.beds} &#183; {props.bathrooms}</p>
      <p className="fw-bold"><i class="bi bi-star-fill"></i> {props.score} &#183; {props.reviews}</p>
    </div>
  );
}


export function PLacesInfoHost () {
  return (
    <div className="border-bottom d-flex py-4">
      <div><i class="bi bi-person-circle fs-1 text-success m-0"></i></div>
      <div className="ms-3 py-2">
        <div className="fw-bold">Anfitrión: Johana Amaya</div>
        <div className="fw-light">3 años anfitrionando</div>
      </div>
    </div>
  );
}

export function PlacesInfoPerks (props) {
  const Perk1 = perks[props.perk1];
  const Perk2 = perks[props.perk2];
  const Perk3 = perks[props.perk3];

  return (
    <div className="border-bottom py-4">
      <Perk1 />
      <Perk2 />
      <Perk3 />
    </div>
  );
}
