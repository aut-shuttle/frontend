//Simple background sync
self.addEventListener('sync', function (event) {
    console.log('firing: sync');
    if (event.tag === 'myFirstSync') {
        event.waitUntil(fetchRandomImage());
    }
});

function fetchRandomImage() {
    //https://unsplash.it/200/300/?random
    console.log('fetching random Image');
    fetch('https://thecatapi.com/api/images/get?format=src&type=gif')
        .then((response) => {
            console.log(response);
            self.registration.showNotification('Hey! New image!',{body:response.url,image:response.url});
            return response;
        })
        .then((text) => {
            console.log('Request successfull ' + text);
        })
        .catch((error) => {
            console.log('Request failed ' + error);
    });
}