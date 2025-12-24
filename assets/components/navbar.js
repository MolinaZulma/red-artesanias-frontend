import { getState } from '../state.js';
import { html } from '../app.js';

export function mountNavbar(el) {
    function render(){
        const { carrito } = getState();
        const count = carrito.reduce((a,c)=> a+c.qty,0);
        const navHtml = html`
        <nav>
            <div class="nav-left">
                <a class="brand" href="/" data-link><i class="fa-solid fa-hands-holding-circle"></i> RedArtesanías.</a>
                <a class="nav-link" href="/catalogo" data-link><i class="fa-solid fa-store"></i> Catálogo</a>
                <a class="nav-link" href="/artesanos" data-link><i class="fa-solid fa-users"></i> Artesanos</a>
                <a class="nav-link" href="/resenas" data-link><i class="fa-solid fa-star"></i> Reseñas</a>
                <a class="nav-link" href="/pedidos" data-link><i class="fa-solid fa-box"></i> Pedidos</a>
            </div>
            <div class="nav-right">
                <i class="fa-solid fa-cart-shopping"></i> ${count}
                <a class="btn-secondary" href="/catalogo"data-link>Explorar</a>
            </div>
        </nav>
        `;
        console.log('Navbar HTML:', navHtml);
        el.innerHTML = navHtml;
    }
    render();
    window.addEventListener('storage', render);
    window.addEventListener('state:updated',render);
}