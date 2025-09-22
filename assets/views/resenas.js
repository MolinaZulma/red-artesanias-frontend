import { html } from '../app.js';

const storeKey = 'resenas_mock_v1';

function load(){ try{return JSON.parse(localStorage.getItem(storeKey))||[]}catch{return[]} }
function save(list){ localStorage.setItem(storeKey, JSON.stringify(list)); }

export function renderResenas(_, outlet=document.getElementById('app')){
    const resenas = load();
    outlet.innerHTML = html`
        <div class="container">
            <h2>Reseñas</h2>
            <form class="form" id="form">
                <label>Producto
                    <input name="producto" placeholder="Nombre del producto" required>
                </label>
                <label>Calificación
                    <select name="rating" required>
                        <option value="5">5 - Excelente</option>
                        <option value="4">4 - Muy bueno</option>
                        <option value="3">3 - Bueno</option>
                        <option value="2">2 - Regular</option>
                        <option value="1">1 - Malo</option>
                    </select>
                </label>
                <label>Comentario
                    <textarea name="comentario" rows="3" placeholder="Escribe tu experiencia..."></textarea>
                </label>
                <button class="btn">Enviar</button>
            </form>
            <div style="margin-top:18px">
                ${resenas.length===0 ? `<div class="empty">Aún no hay reseñas.</div>` : resenas.map(r=>html`
                    <article class="card" style="padding:10px">
                        <div class="body">
                            <strong>${r.producto}</strong> · ⭐ ${r.rating}
                            <p class="muted">${r.comentario||''}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `;
    outlet.querySelector('#form').addEventListener('submit', (e)=>{
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const nuevo = {
            producto: fd.get('producto'),
            rating: Number(fd.get('rating')),
            comentario: fd.get('comentario'),
            fecha: Date.now(),
        };
        const list = load(); list.unshift(nuevo); save(list);
        // Recargar vista
        renderResenas(null, outlet);
    });
}