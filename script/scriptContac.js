const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#envioMail');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailTo.setAttribute(
    'href',
    `mailto:dsp5502@gmail.com?subject= Nombre: ${form.get(
      'name'
    )} Email: ${form.get('email')}&body=${form.get('message')}`
  );
  $buttonMailTo.click();
}
