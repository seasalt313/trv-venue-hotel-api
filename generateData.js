var faker = require('faker');

var database = { hotels: [] };
var https = true;


for (var i = 1; i <= 100; i++) {
    database.hotels.push({
        id: i,
        name: faker.company.companyName() + ' Hotel',
        address: faker.address.streetAddress(),
        city: faker.address.city(1),
        country: faker.address.country(),
        icon: "https://loremflickr.com/50/50/business?/random=" + i,
        phone: faker.phone.phoneNumber(),
        date: faker.date.between('2015-01-01', '2015-12-31', '##-##-##'),
        cost: '$' + faker.commerce.price() + '/night',
    });
}

for (var i = 101; i <= 200; i++) {
    database.hotels.push({
        id: i,
        name: faker.company.companyName() + ' Hotel',
        address: faker.address.streetAddress(),
        city: 'Leipzig',
        country: 'Germany',
        icon: "https://loremflickr.com/50/50/business?/random=" + i,
        phone: faker.phone.phoneNumber(),
        date: faker.date.between('2015-01-01', '2015-12-31', '##-##-##'),
        cost: faker.commerce.price(10, 115, 2, "$") + '/night',
    });
}

console.log(JSON.stringify(database));


