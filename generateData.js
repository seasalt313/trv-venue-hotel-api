var faker = require("faker");

var database = { hotels: [] };

for (var i = 1; i <= 10; i++) {
  database.hotels.push({
    id: i,
    name: faker.company.companyName() + " Hotel",
    description: faker.lorem.paragraph(),
    distance_to_venue: faker.random.number({ min: 1, max: 400 }) + " meters",
    rating: faker.random.number({ min: 0, max: 5 }),
    price_category: faker.random.arrayElement(["low", "medium", "high"]),
    amenities: [
      faker.random.arrayElement([" WIFI", " A/C", " Breakfast Included"]),
      faker.random.arrayElement([" Free Parking", " Swimming Pool", " Spa"]),
      faker.random.arrayElement([" Pets Allowed", " Gym", " Laundry Services"])
    ],
    address: faker.address.streetAddress(),
    image: faker.random.arrayElement([
      "../assets/hotel1.jpg",
      "../assets/hotel2.jpg",
      "../assets/hotel3.jpg",
      "../assets/hotel4.jpg",
      "../assets/hotel5.jpg",
      "../assets/hotel6.jpg",
      "../assets/hotel7.jpg"
    ]),
    rooms: [
      {
        id: i + 100,
        name: faker.company.companyName() + " Room",
        description: faker.lorem.paragraph(),
        max_occupancy: faker.random.number({ min: 1, max: 4 }),
        price_in_usd: faker.random.number({ min: 1, max: 100, precision: 0.01 })
      },
      {
        id: i + 200,
        name: faker.company.companyName() + " Room",
        description: faker.lorem.paragraph(),
        max_occupancy: faker.random.number({ min: 1, max: 4 }),
        price_in_usd: faker.random.number({ min: 1, max: 100, precision: 0.01 })
      },
      {
        id: i + 300,
        name: faker.company.companyName() + " Room",
        description: faker.lorem.paragraph(),
        max_occupancy: faker.random.number({ min: 1, max: 4 }),
        price_in_usd: faker.random.number({ min: 1, max: 100, precision: 0.01 })
      }
    ]
  });
}

console.log(JSON.stringify(database));
