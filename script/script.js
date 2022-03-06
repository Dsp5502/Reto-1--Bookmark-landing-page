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
  <span class="alert bg-danger  align-items-center p-2 m-auto d-block w-25 fs-5">
  <i class="bi bi-exclamation-triangle"></i> Introduce correo "ejemplo@ejemplo.com" 
  </span>
  

   `;

  mostrarAlert.appendChild(alertdiv);
};

const alertDone = () => {
  let alertdiv = document.createElement('div');
  alertdiv.innerHTML = `
  <span class="alert bg-success  align-items-center p-2 m-auto d-block w-25 fs-5">
  <i class="bi bi-bookmark-check-fill"></i> Enviado!!!  
  </span>
  

   `;

  mostrarAlert.appendChild(alertdiv);
};

const evaluar = (email) => {
  const expCorreo = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;

  let evaluada = !expCorreo.test(email) ? false : true;
  return evaluada;
};
