import React from "react";

export const perks  = {
  NiceWelcome: () => {
    return (
      <div className=" d-flex py-2">
        <div className="d-flex align-items-center ">
          <div><i class="bi bi-key fs-3 "></i></div>
          <div className="ms-3 py-2">
            <div className="fw-bold">!Una bienvenida agradable!</div>
            <div className="fw-light">Los huespedes han valorado positivamente el recivimiento.</div>
          </div>
        </div>
      </div>
    );
  },

  CanCancel: () => {
    return (
      <div className=" d-flex py-2">
        <div className="d-flex align-items-center ">
          <div><i class="bi bi-key fs-3 "></i></div>
          <div className="ms-3 py-2">
            <div className="fw-bold">!Una bienvenida agradable!</div>
            <div className="fw-light">Los huespedes han valorado positivamente el recivimiento.</div>
          </div>
        </div>
      </div>
    );
  },

  NiceLocation: () => {
    return (
      <div className=" d-flex py-2">
        <div className="d-flex align-items-center ">
          <div><i class="bi bi-geo-alt fs-3"></i></div>
          <div className="ms-3 py-2">
            <div className="fw-bold">¡Una locaclización espectacular!</div>
            <div className="fw-light">Los huespedes han calificado la vista como maravillosa.</div>
          </div>
        </div>
      </div>
    )
  },


}


// export function NiceWelcome () {
//   return (
//     <div className=" d-flex py-2">
//     <div className="d-flex align-items-center ">
//       <div><i class="bi bi-key fs-3 "></i></div>
//       <div className="ms-3 py-2">
//         <div className="fw-bold">!Una bienvenida agradable!</div>
//         <div className="fw-light">Los huespedes han valorado positivamente el recivimiento.</div>
//       </div>
//     </div>
//   </div>
//   );
// }

// export function CanCancel () {
//   return (
//     <div className=" d-flex py-2">
//       <div className="d-flex align-items-center ">
//         <div><i class="bi bi-calendar-minus fs-3 justify-content-center "></i></div>
//         <div className="ms-3 py-2">
//           <div className="fw-bold">Cancela un día antes</div>
//           <div className="fw-light">Puedes cancelar un día antes sin ningún tipo de penalización.</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function NiceLocation () {
//   return (
//     <div className=" d-flex py-2">
//       <div className="d-flex align-items-center ">
//         <div><i class="bi bi-geo-alt fs-3"></i></div>
//         <div className="ms-3 py-2">
//           <div className="fw-bold">¡Una locaclización espectacular!</div>
//           <div className="fw-light">Los huespedes han calificado la vista como maravillosa.</div>
//         </div>
//       </div>
//     </div>
//   );
// }