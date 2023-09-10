import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LangAndReg from './components/MainModalContainer';


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

          {/* Select Language and Region Modal */}
            <LangAndReg />

          

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



 



 {/* End of Testing Area */}


{/* Change Language modal */}
<LangAndReg />



    </div>
  );
}

export default App;
