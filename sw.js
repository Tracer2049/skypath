const C='skypath-v1',A=['./','index.html','manifest.webmanifest','icon-180.png','icon-512.png','https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/astronomy.browser.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
