var faker = require('faker');

var database = { hotels: [] };

for (var i = 1; i <= 1000; i++) {
    database.hotels.push({
        id: i,
        name: faker.company.companyName() + ' Hotel',
        address: faker.address.streetAddress(),
        icon: faker.image.image(),
        cost: '$' + faker.commerce.price() + '/night',
    });
}

console.log(JSON.stringify(database));
