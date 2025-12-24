import { renderHome } from './views/home.js';
import { renderCatalogo } from './views/catalogo.js';
import { renderProductoDetalle } from './views/producto-detalle.js';
import { renderArtesanos } from './views/artesanos.js';
import { renderPedidos } from './views/pedidos.js';
import { renderResenas } from './views/resenas.js';

const routes = [
    { path: /^\/$/, action: renderHome },
    { path: /^\/catalogo$/, action: renderCatalogo },
    { path: /^\/producto\/(\d+)$/, action: (m, outlet)=>
        renderProductoDetalle(Number(m[1])) },
    { path: /^\/artesanos$/, action: renderArtesanos },
    { path: /^\/pedidos$/, action: renderPedidos },
    { path: /^\/resenas$/, action: renderResenas },
    ];

export function initRouter(){
    const outlet = document.getElementById('app');
    function resolve(){
        const path = window.location.pathname;
        for(const r of routes){
            const match = path.match(r.path);
            if(match){
                outlet.innerHTML = '';
                r.action(match, outlet);
                return;
            }
        }
        outlet.innerHTML = `
        <div class="container">
            <h2>404</h2>
            <p>Página no encontrada.</p>
        </div>
        `;
    }
    window.addEventListener('popstate', resolve);
    document.addEventListener('click', (e)=>{
        const a = e.target.closest('a[data-link]');
        if(!a)return;
            e.preventDefault();
            history.pushState({}, '', a.getAttribute('href'));
            resolve();
    });
    resolve();
}