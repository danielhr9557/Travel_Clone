import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css';





function App() {
  return (
    <div className="App">

        <nav className='navbar'>
        
          


          <a href='https://www.google.com'><i class="bi bi-airplane"/></a>
          <form className='d-flex'>
            <input className='form-control me-2' type='search' placeholder='¿Hacia dónde quieres viajar?' aria-label='search'></input>
            <button className='btn btn-primary'>Buscar</button>
          </form>
          <a href='https://www.google.com'>Publica tu espacio en Travel</a>

          {/* Select Language Modal */}
            {/* Button trigger modal */}
            <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#changeLanguage">
                ESP
              </button>

              {/* Modal */}
              <div className="modal fade" id="changeLanguage" tabindex="-1" aria-labelledby="changeLanguageLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="changeLanguageLabel">Modal title</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

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


{/* Change Language modal */}
        



    </div>
  );
}

export default App;
