let CACHE_NAME = 'mws-restaurants-v2';
let urlsToCache = [
   '/',
    '/index.html',
    '/restaurant.html',
   '/css/styles.css',
   '/data/restaurants.json',
   '/img/1.jpg',
   '/img/2.jpg',
   '/img/3.jpg',
   '/img/4.jpg',
   '/img/5.jpg',
   '/img/6.jpg',
   '/img/7.jpg',
   '/img/8.jpg',
   '/img/9.jpg',
   '/img/10.jpg',
   '/js/dbhelper.js',
   '/js/main.js',
   '/js/restaurant_info.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
   event.respondWith(
       caches.match(event.request)
           .then(function(response) {
              // Cache hit - return response
              if (response) {
                 return response;
              }

              return fetch(event.request).then(
                  function(response) {
                     // Check if we received a valid response
                     if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                     }

                     let responseToCache = response.clone();

                     caches.open(CACHE_NAME)
                         .then(function(cache) {
                            cache.put(event.request, responseToCache);
                         });

                     return response;
                  }
              );
           }).catch( function (err) {
               console.error(err);
       })
   );
});

