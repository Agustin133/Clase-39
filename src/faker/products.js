const faker = require('faker');

function randomProfucts() {
    const prod = {
        title: faker.name.title(),
        price: faker.datatype.number().toString(),
        stock: faker.datatype.number().toString(),
        code: faker.datatype.number().toString(),
        thumbnail: faker.image.imageUrl(),
        timestamp: faker.time.recent().toString(),
        description: faker.vehicle.color()
    }
    return prod;
};

module.exports = { randomProfucts };