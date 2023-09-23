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
import { Categories } from './components/Caterogies';


function App() {
  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <a href='https://www.google.com'><i class="bi bi-cloud-haze2"/></a>
          <form className='d-flex'>
            <div>
              <SearchingBar />
            </div>
          </form>
          <a className="nav-bar-link btn btn-share" href='https://www.google.com'>Publica tu espacio en Travel</a>
          <MixedLangRegCur className="mr-2"/>
          <UserDropdown className="mr-2" /> 
        </nav>
      </header>
      <Categories />

{/* Testing Area  */}




 {/* End of Testing Area */}

      {/* Separador del Body y Footer */}
      <div style={{height: '500px'}}></div>
      
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
