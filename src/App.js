import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {MainModalContainer} from './components/MainModalContainer';
import LanRegBottom from './components/LanRegBottom';
import CurrencyBottom from './components/CurrencyBottom';
import { SearchWhere } from './components/SearchWhere';


function App() {
  return (
    <div className="App">
        <nav className='navbar'>
        
          <a href='https://www.google.com'><i class="bi bi-airplane"/></a>
          <form className='d-flex'>
            {/* <input className='form-control me-2' type='search' placeholder='¿Hacia dónde quieres viajar?' aria-label='search'><span>¿A dónde?</span></input> */}
            <div>
              {/* ¿A dónde? */}
              <SearchWhere />

                

            </div>
            <button className='btn btn-primary'>Buscar</button>
          </form>
          <a href='https://www.google.com'>Publica tu espacio en Travel</a>

          {/* Select Language and Region Modal */}
            <MainModalContainer />

            

          

              {/* Menu dropdown */}
              <div className='dropdown'>
                <button className='btn dropdown-toggle' type='button' data-bs-toggle='dropdown' data-bs-display='static' aria-expanded='false'> 
                  User
                </button>
                <ul className='dropdown-menu dropdown-menu-end '>
                  <li><a className='dropdown-item' href='#'>Regístrate</a></li>
                  <li><a className='dropdown-item' href='#'>Iniciar sesión</a></li>
                  <li><a className='dropdown-item' href='#'>Pon tu espacio en Travel</a></li>
                  <li><a className='dropdown-item' href='#'>Centro de ayuda</a></li>
                </ul>
              </div>


         
          
        </nav>

  {/* Testing Area  */}

  <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">1</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">2</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>

 {/* End of Testing Area */}


{/* Change Language modal */}

{/* Footer */}

<footer>
  <div className="container d-flex align-items-center justify-content-center">
    <LanRegBottom />
    <CurrencyBottom />
  </div>
</footer>



    </div>
  );
}

export default App;
