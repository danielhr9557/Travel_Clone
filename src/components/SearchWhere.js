import React, { useState } from "react";

function SearchWhere () {
  const [ activeTab, setActiveTab] = useState('tab1');

  const handdleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Buttons */}
      <button type="button" className="btn" onClick={() => handdleActiveTab('tab1')} data-bs-toggle="modal" data-bs-target="#exampleModal">
        ¿Adónde vas?
      </button>
      <button type="button" className="btn" onClick={() => handdleActiveTab('tab2')} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Llegada
      </button>
      <button type="button" className="btn" onClick={() => handdleActiveTab('tab3')} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Salida
      </button>
      <button type="button" className="btn" onClick={() => handdleActiveTab('tab4')} data-bs-toggle="modal" data-bs-target="#exampleModal">
        ¿Cuántos van?
      </button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className={`nav-link ${activeTab === 'tab1' ? 'active' : '' }`} id="pills-where-tab" data-bs-toggle="pill" data-bs-target="#pills-where" type="button" aria-current="page" href="#">¿Adónde vas?</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeTab === 'tab2' ? 'active' : ''  }`} id="pills-arrival-tab" data-bs-toggle="pill" data-bs-target="#pills-arrival" type="button" href="#">Llegada</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Salida</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">¿Cuántos van?</a>
                </li>
                <button type="button" className="btn">Buscar</button>
              </ul>
            </div>

            {/* Modal Body */}
            <div className="modal-body" id="pills-tabContent">
              <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : '' }`} id="pills-where" role="tabpanel" aria-labelledby="pills-where-tab" tabindex="0">¿Adónde vas? ¿Colombia? ¿Estados Unidos?</div>
                <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : '' }`} id="pills-arrival" role="tabpanel" aria-labelledby="pills-arrival-tab" tabindex="0">¿Cuándo llegas?</div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export { SearchWhere };