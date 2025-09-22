//Estado global simple con localStorage para carrito y sesión 
const STORAGE = 'red_artesanias_state_v1';
const initial = { carrito:[], token: null};
function load(){
    try { return JSON.parse(localStorage.getItem(STORAGE)) || initial;
        } catch{ return initial; }
}
let state = load();
function persist(){
    window.dispatchEvent(new CustomEvent('state:updated'));
    localStorage.setItem(STORAGE, JSON.stringify(state));}
export const getState = () => structuredClone(state);
export function addToCart(item){
    //item = {id, name, price, qty}
    const existing = state.carrito.find(x => x.id === item.id);
    if(existing){
        existing.qty += item.qty;
    } else {
        state.carrito.push({...item});}
    persist();
}

export function clearCart(){state.carrito=[]; persist();}
export function setToken(t){state.token=t; persist();}
// Elimina un producto del carrito por id
export function removeFromCart(id) {
    state.carrito = state.carrito.filter(item => item.id !== id);
    persist();
}