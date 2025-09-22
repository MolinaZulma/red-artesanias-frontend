import { html } from '../app.js';

export function renderHome(_, outlet = document.getElementById('app')) {
    outlet.innerHTML = html`
        <section class="hero container" style="text-align:center; padding:40px 0 20px 0;">
            <img src="assets/images/artesano.jpg" alt="Artesanías Colombianas"
                style="width:100%;max-width:320px;border-radius:18px;box-shadow:0 2px 16px #0002;margin-bottom:18px;">
            <h1 style="margin-bottom:10px;">Bienvenido a la Red de Artesanías</h1>
            <p class="muted" style="font-size:1.1em;">
                Descubre el talento y la creatividad de artesanos colombianos.<br>
                Explora nuestro catálogo, conoce a los creadores y encuentra piezas únicas hechas a mano.
            </p>
            <div class="row" style="gap:18px; margin-top:22px; justify-content:center;">
                <a class="btn" href="/catalogo" data-link>Explorar Catálogo</a>
                <a class="btn secondary" href="/artesanos" data-link>Conocer Artesanos</a>
                <a class="btn secondary" href="/resenas" data-link>Reseñas</a>
            </div>
        </section>
        <section class="container" style="margin-top:40px;">
            <h2 style="text-align:center;">Destacados</h2>
            <div class="grid" style="justify-content:center;">
                <div class="card">
                    <div class="media">
                        <img src="assets/images/sombrero.svg" alt="Sombrero Vueltiao" style="width:100px; border-radius:12px;">
                    </div>
                    <div class="body">
                        <strong>Sombrero Vueltiao</strong>
                        <p class="muted">Tradición y estilo colombiano.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="media">
                        <img src="assets/images/mochila.svg" alt="Mochila Wayuu" style="width:100px; border-radius:12px;">
                    </div>
                    <div class="body">
                        <strong>Mochila Wayuu</strong>
                        <p class="muted">Colores y cultura de La Guajira.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}