const ROUTES=['home','games','daily','progress','settings'];
export function currentRoute(){const route=location.hash.replace(/^#\/?/,'').split('/')[0];return ROUTES.includes(route)?route:'home';}
export function navigate(route){if(!ROUTES.includes(route))route='home';location.hash=`/${route}`;}
export function setActiveNavigation(route){document.querySelectorAll('[data-route]').forEach(el=>{if(el.classList.contains('nav-link')){const active=el.dataset.route===route;el.classList.toggle('active',active);if(active)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');}});}
