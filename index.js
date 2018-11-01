function getAll() {
    return fetch("http://faker.hook.io")
        .then((response) => response.json())

    console.log('response, ', response);

}