import React from "react";
import { Currency } from "./LangRegCur";
import "../styleSheets/currency-bottom.css";

function CurrencyBottom () {
  return (
    <div>
        <button type="button" className="btn btn-link text-decoration-none text-dark fw-semibold pe-0"  data-bs-toggle="modal" data-bs-target="#CurrencyBottom">
          $ COP
        </button>
        <div className="modal fade" id="CurrencyBottom" tabIndex="-1" aria-labelledby="CurrencyBottomLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <Currency />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CurrencyBottom; 