import React from "react";
import { Currency } from "./LangRegCur";

function CurrencyBottom () {
  return (
    <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CurrencyBottom">
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