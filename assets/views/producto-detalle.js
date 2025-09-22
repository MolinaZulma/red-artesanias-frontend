import { API } from '../api.js';
import { html, formatMoney } from '../app.js';
import { addToCart } from '../state.js';

export async function renderProductoDetalle(id, outlet=document.getElementById('app')){
outlet.innerHTML = `<div class="container"><p class="muted">Cargando producto...</p></div>`;
const p = await API.obtenerProducto(id);

if(!p){
outlet.innerHTML = `<div class="container"><div class="empty">Producto no encontrado.</div></div>`;
return;
}

outlet.innerHTML = html`
<div class="container">
<div class="row" style="align-items:flex-start">
<div style="flex:1; min-width:260px">
<div class="card">
<div class="media">${p.fotos?.[0] ? `<img src="${p.fotos[0]}" alt="${p.nombre}">` : ''}
</div>
</div>
</div>
<div style="flex:2; min-width:280px">
<h2>${p.nombre}</h2>
<p class="price">${formatMoney(p.precio)}</p>
<p class="muted">${p.descripcion}</p>
<div class="row">
<label style="max-width:120px">
Cantidad
<input id="qty" type="number" value="1" min="1">
</label>
<button class="btn" id="add">Agregar al carrito</button>
</div>
<p class="muted" style="margin-top:8px">Artesano ID: ${p.artesanoId}</p>
</div>
</div>
</div>
`;

outlet.querySelector('#add').addEventListener('click', ()=>{
    const qty = Math.max(1, Number(outlet.querySelector('#qty').value || 1));
    addToCart({ id: p.id, nombre: p.nombre, precio: p.precio, qty });
    localStorage.setItem('lastCartUpdate', String(Date.now()));
    localStorage.removeItem('lastCartUpdate');
});
}
