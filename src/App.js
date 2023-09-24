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
      <nav className="navbar navbar-expand-md">
        <div className="col">
          <a href='https://www.google.com' className="logo d-flex align-items-center "><i className="bi bi-cloud-haze2"/>Cloud</a>
        </div>

        <div className="col">
          <SearchingBar />
        </div>

        <div className="d-flex justify-content-end col">
          <a className="nav-bar-link btn btn-share" href='https://www.google.com'>Publica tu espacio en Travel</a>
          <MixedLangRegCur />
          <UserDropdown /> 
        </div>
      </nav>



      {/* <nav className="navbar navbar-expand-md d-flex ">
       
          <a href='https://www.google.com' className="logo d-flex align-items-center flex-grow-1"><i className="bi bi-cloud-haze2"/>Cloud</a>
     

          <div className="d-flex mx-auto ">
            <SearchingBar />

          </div>
   

        <div className="d-flex justify-content-end flex-grow-1">
          <a className="nav-bar-link btn btn-share" href='https://www.google.com'>Publica tu espacio en Travel</a>
          <MixedLangRegCur />
          <UserDropdown /> 
        </div>
      </nav> */}

 



      {/* <header>
        <nav className='navbar container'>
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
        <Categories />
      </header> */}
      

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
