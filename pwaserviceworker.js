const cacheName = "";
const precachedResources = [
  "/",
  "/resources/css/scoutingPASS.css",
  "/resources/fonts/alex.woff",
  "/resources/fonts/alexisv3.ttf",
  "/resources/images/field_location_key.png",
  "/resources/images/igknighters_logo.png",
  "/resources/js/easy.qrcode.min.js",
  "/resources/js/scoutingPASS.js",
  "/resources/js/TBAInterface.js",
  "/resources/js/googleSheets.js",
  "/pit.html",
  "/pitscouting.html"
];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (e) => {
  e.waitUntil(precache());
});

function isCacheable(request) {
  return true;
}

async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener("fetch", (event) => {
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});
