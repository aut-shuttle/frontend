//Simple background sync
self.addEventListener('sync', function (event) {
    console.log('firing: sync');
    if (event.tag === 'myFirstSync') {
        event.waitUntil(fetchRandomImage());
    }
});
}
