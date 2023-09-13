import React, { useState } from "react";
import "../styleSheets/searching-bar.css";

function SearchingBar () {
  const [ activeTab, setActiveTab] = useState('tab1');

  const handdleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Botones para iniciar Modal */}
      <div className="searching-bar-container">
      <button type="button" className="btn btn-left search-group" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={() => handdleActiveTab('tab1')}>
        ¿Adónde vas?
      </button>
      <button type="button" className="btn btn-middle search-group" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={() => handdleActiveTab('tab2')}>
        Llegada
      </button>
      <button type="button" className="btn btn-middle search-group" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={() => handdleActiveTab('tab3')}>
        Salida
      </button>
      <button type="button" className="btn btn-right search-group" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={() => handdleActiveTab('tab4')}>
        ¿Cuántos van?      
        <span className="search-button-span" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={(e) => {e.stopPropagation(); handdleActiveTab('tab5')}}>
          <i className="bi bi-search"></i>
        </span>
      </button>
      </div>

      {/* Modal */}
      <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <nav>
                {/* Botones de nav-tabs */}
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className={`nav-link ${activeTab === 'tab1' ? 'active' : '' }`} id="nav-where-tab" data-bs-toggle="tab" data-bs-target="#nav-where" type="button" role="tab" aria-controls="nav-where" aria-selected="true">
                    ¿Adónde vas?
                  </button>
                  <button className={`nav-link ${activeTab === 'tab2' ? 'active' : '' }`} id="nav-arrival-tab" data-bs-toggle="tab" data-bs-target="#nav-arrival" type="button" role="tab" aria-controls="nav-arrival" aria-selected="true">
                    Llegada
                  </button>
                  <button className={`nav-link ${activeTab === 'tab3' ? 'active' : '' }`} id="nav-leaving-tab" data-bs-toggle="tab" data-bs-target="#nav-leaving" type="button" role="tab" aria-controls="nav-leaving" aria-selected="true">
                    Salida
                  </button>
                  <button className={`nav-link ${activeTab === 'tab4' ? 'active' : '' }`} id="nav-travelers-tab" data-bs-toggle="tab" data-bs-target="#nav-travelers" type="button" role="tab" aria-controls="nav-travelers" aria-selected="true">
                    ¿Cuántos van?
                  </button>
                  <button className={`btn btn-primary ${activeTab === 'tab5' ? 'active' : '' }`}  id="nav-search-tab" data-bs-toggle="tab" data-bs-target="#nav-search" type="button" role="tab" aria-controls="nav-search" aria-selected="true">
                    <i class="bi bi-search"></i> Buscar
                  </button>
                </div>
              </nav>
            </div>
            {/* Contenido de las nav-tabs */}
            <div className="tab-content" id="nav-tabContent">
              <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : '' }`} id="nav-where" role="tabpanel" aria-labelledby="nav-where-tab" tabindex="0">1</div>
              <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : '' }`} id="nav-arrival" role="tabpanel" aria-labelledby="nav-arrival-tab" tabindex="0">2</div>
              <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : '' }`} id="nav-leaving" role="tabpanel" aria-labelledby="nav-leaving-tab" tabindex="0">3</div>
              <div className={`tab-pane fade ${activeTab === 'tab4' ? 'show active' : '' }`} id="nav-travelers" role="tabpanel" aria-labelledby="nav-travelers-tab" tabindex="0">4</div>
              <div className={`tab-pane fade ${activeTab === 'tab5' ? 'show active' : '' }`} id="nav-search" role="tabpanel" aria-labelledby="nav-search-tab" tabindex="0"></div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export { SearchingBar };