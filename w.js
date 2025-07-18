const cacheName = "ndcar-v1";
const filesToCache = [
  "/NDCAR/",
  "/NDCAR/index.html",
  "/NDCAR/manifest.json",
  "/NDCAR/w.js",
  "/NDCAR/logo-topo.png",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
