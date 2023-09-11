import React from "react";
import {LangRegion} from "./LangRegCur";
import "../App.css"

function LanRegBottom () {
  return (
    <div className="middle">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Español (CO)
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <LangRegion />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LanRegBottom; 