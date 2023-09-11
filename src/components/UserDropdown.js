import React from "react";

function UserDropdown () {
  return (
    <div className='dropdown'>
    <button className='btn ' type='button' data-bs-toggle='dropdown' data-bs-display='static' aria-expanded='false'> 
    <i class="bi bi-list"></i><i class="bi bi-person-circle"></i>
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