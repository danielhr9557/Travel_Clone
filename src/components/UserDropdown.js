import React from "react";
import "../styleSheets/user-dropdown.css";

function UserDropdown () {
  return (
    <div className='dropdown d-none d-md-block'>
      <button className='btn user-dropdown-button' type='button' data-bs-toggle='dropdown' data-bs-display='static' aria-expanded='false'>
        <span className="bi-list-span">
          <i class="bi bi-list"></i>
        </span> 
          <i class="bi bi-person-circle"></i>
      </button>
      <ul className='dropdown-menu dropdown-menu-end '>
        <li><a className='dropdown-item' href='#'>Regístrate</a></li>
        <li><a className='dropdown-item' href='#'>Iniciar sesión</a></li>
        <li><a className='dropdown-item' href='#'>Pon tu espacio en Travel</a></li>
        <li><a className='dropdown-item' href='#'>Centro de ayuda</a></li>
      </ul>
    </div>
  );
}

export { UserDropdown };