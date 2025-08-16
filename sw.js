self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('lucky-direction-v1').then(cache => {
            return cache.addAll([
                '/lucky_direction.html',
                '/success.html',
                '/cancel.html'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
