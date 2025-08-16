self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('lucky-direction-v1').then(cache => {
            return cache.addAll([
                '/zen/lucky_direction/lucky_direction.html',
                '/zen/lucky_direction/success.html',
                '/zen/lucky_direction/cancel.html',
                'https://cdn.tailwindcss.com',
                'https://js.stripe.com/v3/'
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
