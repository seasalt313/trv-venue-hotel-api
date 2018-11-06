function getAll() {
    return fetch("http://faker.hook.io/?locale=de")
        .then((response) => response.json());
}