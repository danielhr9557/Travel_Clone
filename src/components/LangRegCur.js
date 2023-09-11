import React from "react";

function Currency() {
  return (
    <div>
      <h2>Selecciona una moneda</h2>
      <br/>
      <button type="button" class="btn btn-light btn-block">Peso Colombiano <br/>COP - $</button>
      <button type="button" class="btn btn-light btn-block">Dólar Estadounidense <br/>USD - $</button>
      <button type="button" class="btn btn-light btn-block">Euro <br/>EUR - €</button>
    </div>
  );
}

function LangRegion () {
  return (
    <div>
      <h2>Elige un idioma y una región</h2>
      <br/>
      <button className="btn btn-light" type="button">Español <br/>Colombia</button>
      <button className="btn btn-light" type="button">English <br/>United States</button>
      <button className="btn btn-light" type="button">Français <br/>France</button>
    </div>
  );
}

export { Currency, LangRegion };