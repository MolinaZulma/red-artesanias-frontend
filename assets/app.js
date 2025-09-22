//Utilidades de UI y helpers simples
export const $ = (sel, ctx=document) => ctx.querySelector(sel);
export const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
export const html = (strings, ...vals) => strings.map((s,i)=>s+(vals[i]??'')).join('');
export const navigate = (path) => {
    history.pushState({},'',path);
    window.dispatchEvent(new Event('popstate'));
};
export const formatMoney = (n) => new Intl.NumberFormat('es-CO',
    {style:'currency', currency:'COP'}).format(n);
