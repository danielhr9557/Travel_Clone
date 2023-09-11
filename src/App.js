import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {MixedLangRegCur} from './components/MixedLangRegCur';
import LanRegBottom from './components/LanRegBottom';
import CurrencyBottom from './components/CurrencyBottom';
import { SearchingBar } from './components/SearchingBar';
import { UserDropdown } from './components/UserDropdown';


function App() {
  return (
    <div className="App">
        <nav className='navbar'>
          <a href='https://www.google.com'><i class="bi bi-airplane"/></a>
          <form className='d-flex'>
            <div>
              <SearchingBar />
            </div>
          </form>
          <a className="nav-bar-link" href='https://www.google.com'>Publica tu espacio en Travel</a>
          <MixedLangRegCur />
          <UserDropdown /> 
        </nav>

{/* Testing Area  */}



 {/* End of Testing Area */}

      {/* Separador del Body y Footer */}
      <div style={{height: '500px'}}></div>
      
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
