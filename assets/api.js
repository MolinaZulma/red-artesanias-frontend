//Capa de API con datos mockeados. Reemplazar por fetche() hacia el backend 
const delay = (ms) => new  Promise(r=>setTimeout(r, ms));
const productos = [

{id:1, 
    nombre:'Sombrero Vueltiao',
    precio:120000, 
    descripcion:'Hecho a mano por artesanos.', 
    artesanoId:1, 
    fotos:['https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']},

{id:2, 
    nombre:'Mochila Wayuu', 
    precio:180000, 
    descripcion:'Tejido tradicional de la Guajira.', 
    artesanoId:2, 
    fotos:['https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']},

{id:3, 
    nombre:'Cartera de Cuero', 
    precio:95000, 
    descripcion:'Cuero genuino trabajado a mano.', 
    artesanoId:3, 
    fotos:['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']},
];

const artesanos = [
    {id:1, 
    nombre:'Juan Pérez',
    bio:'Técnicas de trenzado de caña flecha.',
    foto:'assets/images/hombre1.jpg'}, 

    {id:2, 
    nombre:'María Gómez',
    bio:'Tejidos Wayuu con diseños personalizados.',
    foto:'assets/images/mujer2.jpg'}, 

    {id:3, 
    nombre:'Carlos Rodríguez',
    bio:'Cerámica utilitaria y decorativa.',
    foto:'assets/images/hombre1.jpg'}
];

export const API = {
    async listarProductos(){
        /*const res = await fetch('http://localhost:8080/api/artesanos');
        return await res.json(); */
        await delay(250);
        return productos;
    },

    async obtenerProducto(id){
        await delay(150);
        return productos.find(p=>p.id===id)?? null;
    },

    async listarArtesanos(){
        await delay(200);
        return artesanos;
    }, 
};