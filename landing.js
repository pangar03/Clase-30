import { obtenerUsuarioActivo, logOut } from './session.js';

const render = () => {
    const usuarioActivo = obtenerUsuarioActivo();

    if(!usuarioActivo) {
        window.location.href = './index.html';
        return;
    }

    const usuarioActivoNombre = document.querySelector('#usuarioActivoNombre');
    usuarioActivoNombre.innerHTML = `
        <h1>Bienvenido ${usuarioActivo.correo}</h1>
    `;

    const cerrarSesion = document.querySelector('#cerrarSesion');
    cerrarSesion.addEventListener('click', () => {
        logOut();
        window.location.href = './index.html';
    });
};

document.addEventListener('DOMContentLoaded', render);