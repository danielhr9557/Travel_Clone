import React from "react";

function Currency() {
  return (
    <div>
      <h2>Selecciona una moneda</h2>
      <br/>
      <button type="button" class="btn btn-light btn-block">Peso Colombiano <br/><span>COP - $</span></button>
      <button type="button" class="btn btn-light btn-block">Dólar Estadounidense <br/><span>USD - $</span></button>
      <button type="button" class="btn btn-light btn-block">Euro <br/><span>EUR - €</span></button>
    
    </div>
    
  )
}

export default Currency;