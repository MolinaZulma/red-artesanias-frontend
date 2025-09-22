import { API } from '../api.js';
import { html } from '../app.js';

export async function renderArtesanos(_, outlet=document.getElementById('app')){
    outlet.innerHTML = html`
    <div class="container">
    <p class="muted">Cargando artesanos...</p>
    </div>`;

    const data = await API.listarArtesanos();
    outlet.innerHTML = html`
        <div class="container">
            <h2>Artesanos</h2>
            <div class="grid">
            ${data.map(a=>html`
            <article class="card">
        <div class="media">
            ${a.foto ? `<img src="${a.foto}" alt="${a.nombre}"/>` : ''}
        </div>
            <div class="body">
            <h3>${a.nombre}</h3>
            <p class="muted">${a.bio}</p>
        </div>
    </article>

`).join('')}

</div>

</div>

`;

}