import { getState } from '../state.js';
import { html } from '../app.js';

export function mountNavbar(el) {
    function render(){
        const { carrito } = getState();
        const count = carrito.reduce((a,c)=> a+c.qty,0);
        const navHtml = html`
        <nav>
            <div class="nav-left">
                <a class="brand" href="/"data-link>RedArtesanías.</a>
                <a class="nav-link" href="/catalogo"data-link>Cátalogo</a>
                <a class="nav-link" href="/artesanos"data-link>Artesanos</a>
                <a class="nav-link" href="/resenas"data-link>Reseñas</a>
                <a class="nav-link" href="/pedidos"data-link>Pedidos</a>
            </div>
            <div class="nav-right">
                Carrito: ${count}
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