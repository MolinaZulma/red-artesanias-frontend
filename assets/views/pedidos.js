import { html, formatMoney } from '../app.js';
import { getState, clearCart, removeFromCart } from '../state.js';

export function renderPedidos(_, outlet = document.getElementById('app')) {
    const render = () => {
        const { carrito } = getState();
        const total = carrito.reduce((a, c) => a + c.precio * c.qty, 0);
        outlet.innerHTML = html`
            <div class="container">
                <h2>Carrito y Pedidos</h2>
                ${carrito.length === 0 ? `
                    <div class="empty">Tu carrito está vacío.</div>
                ` : `
                    <table class="cart">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${carrito.map(item => html`
                                <tr>
                                    <td>${item.nombre}</td>
                                    <td>${item.qty}</td>
                                    <td>${formatMoney(item.precio)}</td>
                                    <td>${formatMoney(item.precio * item.qty)}</td>
                                    <td>
                                        <button class="btn secondary" data-remove="${item.id}">Eliminar</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    <div class="row" style="justify-content:space-between;margin-top:10px">
                        <strong>Total: ${formatMoney(total)}</strong>
                        <div class="row">
                            <button class="btn secondary" id="clear">Vaciar carrito</button>
                            <button class="btn" id="checkout">Confirmar Pedido</button>
                        </div>
                    </div>
                `}
            </div>
        `;
        outlet.querySelectorAll('button[data-remove]').forEach(btn => {
            btn.addEventListener('click', () => {
                removeFromCart(Number(btn.dataset.remove));
                render();
                localStorage.setItem('lastCartUpdate', String(Date.now()));
                localStorage.removeItem('lastCartUpdate');
            });
        });
        outlet.querySelector('#clear')?.addEventListener('click', () => {
            clearCart();
            render();
        });
        outlet.querySelector('#checkout')?.addEventListener('click', () => {
            alert('Pedido confirmado. (Mock) Aquí llamaría al backend.');
            clearCart();
            render();
        });
    };
    render();
}