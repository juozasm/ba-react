var faker = require('faker');

var database = { products: [] };

for (var i=1; i<=1000; i++) {
  database.products.push({
    id: i,
    name: faker.random.words(),
    price: Math.random()*100,
    quantity: Math.random()*1000,
    categories: [i % 2 ? 1 : 2, 0]
  });
}

console.log(JSON.stringify(database));