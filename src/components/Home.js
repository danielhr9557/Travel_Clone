import React from "react";
import { Cabana011, Domo011, Isla011, Montanas011 } from "./PlaceCard";

function Home () {
  return (
    <div className="container row justify-content-between d-flex p-0 m-0">
      <Cabana011 />
      <Domo011 />
      <Isla011 />
      <Montanas011 />
    </div>
  );
}

export { Home };