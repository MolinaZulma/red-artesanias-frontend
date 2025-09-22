export function mountFooter(el) {
    const year = new Date().getFullYear();
    el.innerHTML = `
        <div class="container" style="padding:16px 0;">
            <small class="muted">&copy; ${year} Red de Artesanías y Emprendedores.</small>
        </div>
    `;
}