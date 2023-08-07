import { clientServices } from '../services/client-service.js';

let user = '';
let password = '';
clientServices.datosUsuarios().then((data) => {
  data.forEach((x) => {
    user = x.usuario;
    password = x.password;
  });
});

const btnEnviar = document.querySelector('#enviar-login');
btnEnviar.addEventListener('click', (evento) => {
  evento.preventDefault();
  loginUsuario();
});

const loginUsuario = () => {
  const usuarioIngresado = document.querySelector('#usuario').value;
  const passwordIngresado = document.querySelector('#password').value;

  if (usuarioIngresado === user && passwordIngresado === password) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Login Exitoso',
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(function () {
      window.location.href = '../vistas/productos.html';
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Datos incorrectos',
    });
  }
};
