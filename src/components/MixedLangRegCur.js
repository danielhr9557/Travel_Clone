import React from "react";
import { Currency, LangRegion } from "./LangRegCur";
import "../styleSheets/Mixed-Lang-Reg-Cur.css";

function MixedLangRegCur () {
  return (
    <div className="d-none d-md-block ">
      <button type="button" className="btn btn-mixed-lang-reg-cur" data-bs-toggle="modal" data-bs-target="#MixedLangRegCur">
        <i class="bi bi-globe2"></i>
      </button>
      
    </div>
  )
}

export  {MixedLangRegCur};