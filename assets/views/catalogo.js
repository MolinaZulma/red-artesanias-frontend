import { API } from '../api.js';
import { html, navigate, formatMoney} from '../app.js';
import { addToCart } from '../state.js';

export async function renderCatalogo(_,outlet=document.getElementById('app')) {
    outlet.innerHTML = html`
    <div class="container">
        <div class="container">
            <h2>Catálogo</h2>
            <p class="muted">Cargando productos...</p>
    </div>
    `;
        const data = await API.listarProductos();
        outlet.innerHTML = html`
            <div class="container">
                <h2>Catálogo</h2>
                <div class="grid">
                    ${data.map(p => html`
                        <article class="card">
                        <div class="media">
                            ${p.fotos?.[0] ? `<img src="${p.fotos[0]}" alt="${p.nombre}"/>` : 'Sin Imagen'}
                </div>
                <div class="body">
                    <h3>${p.nombre}</h3>
                    <p class="price">${formatMoney(p.precio)}</p>
                    <p class="muted">${p.descripcion}</p>
                    <div class="row">
                        <button class="btn" data-add="${p.id}">Agregar</button>
                        <a class="btn secondary" href="/producto/${p.id}" data-link>Detalle</a>
                    </div> 
                </div>
            </article>
        `).join('')}
    </div>
</div>
`;
        outlet.addEventListener('click', (e)=>{
            const btn = e.target.closest('button[data-add]');
            if(!btn)return;
                const id = Number(btn.dataset.add);
                const prod = data.find(x=>x.id === id);
                if(!prod)return;
                    addToCart({id:prod.id, nombre:prod.nombre, precio:prod.precio, qty:1});
                        //"Ping" para actualizar navbar de otras pestañas
                        localStorage.setItem('lastCartUpdate', String(Date.now()));
                        localStorage.removeItem('lastCartUpdate');
    });
}