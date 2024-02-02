const cacheName = "";
const precachedResources = [
  "/ScoutingPASS/",
  "/ScoutingPASS/resources/css/scoutingPASS.css",
  "/ScoutingPASS/resources/fonts/alex.woff",
  "/ScoutingPASS/resources/fonts/alexisv3.ttf",
  "/ScoutingPASS/resources/images/field_location_key.png",
  "/ScoutingPASS/resources/images/igknighters_logo.png",
  "/ScoutingPASS/resources/js/easy.qrcode.min.js",
  "/ScoutingPASS/resources/js/scoutingPASS.js",
  "/ScoutingPASS/resources/js/TBAInterface.js",
  "/ScoutingPASS/resources/js/googleSheets.js",
  "/ScoutingPASS/pit.html",
  "/ScoutingPASS/pitscouting.html"
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
