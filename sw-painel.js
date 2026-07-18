// Service Worker do painel — propositalmente NÃO guarda nada em cache.
// O painel é um dashboard de dados ao vivo (Supabase); a única razão desse
// arquivo existir é satisfazer o requisito do Chrome/Edge de "ter um
// Service Worker registrado" para habilitar a instalação como app na
// área de trabalho. Toda requisição passa direto pra rede, sempre.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
