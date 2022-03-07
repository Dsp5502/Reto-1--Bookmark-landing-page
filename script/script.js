let inputContact = document.getElementById('inputContact');
let buttonContact = document.getElementById('buttonContact');
let mostrarAlert = document.getElementById('mostarAlert');

buttonContact.addEventListener('click', (e) => {
  e.preventDefault();
  let email = inputContact.value;
  let correoEvaluado = evaluar(email);
  correoEvaluado ? alertDone() : alertaDanger();
});

const alertaDanger = () => {
  let alertdiv = document.createElement('div');
  alertdiv.innerHTML = `
  <div class="alert bg-danger alert-dismissible fade show align-items-center p-2 m-auto d-block w-50 fs-5"
      role="alert">
     <i class="bi bi-exclamation-triangle"></i> <strong>Introduce correo</strong> "ejemplo@ejemplo.com" 
    <button
        type="button"
        class="btn-close btn-close-white pb-1"
        data-bs-dismiss="alert"
        aria-label="Close"
    ></button>
</div>

   `;

  mostrarAlert.appendChild(alertdiv);
};

const alertDone = () => {
  let alertdiv = document.createElement('div');
  alertdiv.innerHTML = `
 <div class="alert bg-success alert-dismissible fade show align-items-center p-2 m-auto d-block w-50 fs-5"
      role="alert">
      <i class="bi bi-bookmark-check-fill"></i>
      <strong>Enviado!!!</strong>
    <button
        type="button"
        class="btn-close btn-close-white pb-1"
        data-bs-dismiss="alert"
        aria-label="Close"
    ></button>
</div>
  

   `;

  mostrarAlert.appendChild(alertdiv);
};

const evaluar = (email) => {
  const expCorreo = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;

  let evaluada = !expCorreo.test(email) ? false : true;
  return evaluada;
};
