import { registrar } from './session.js';

const render = () => {
    const registro = document.querySelector('#registro');

    registro.addEventListener('submit', (e) => {
        e.preventDefault();

        const correo = e.target.correo.value;
        const contrasena = e.target.contrasena.value;
        const confirmarContrasena = e.target.confirmarContrasena.value;

        try {
            registrar(correo, contrasena, confirmarContrasena);
            alert('Registro exitoso');
            window.location.href = './index.html';
        } catch (error) {
            alert(error.message)
        }
    });
};

document.addEventListener('DOMContentLoaded', render);