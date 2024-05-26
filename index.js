import { login } from './session.js';

const render = () => {
    const loginForm = document.querySelector('#login');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const correo = e.target.correo.value;
        const contrasena = e.target.contrasena.value;

        try {
            login(correo, contrasena);
            window.location.href = './landing.html';
        } catch (error) {
            alert(error.message)
        }
    });
};

document.addEventListener('DOMContentLoaded', render);