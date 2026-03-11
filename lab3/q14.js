const products = [
    { name: 'Apple iPhone', price: 30000 },
    { name: 'Samsung Galaxy', price: 25000 },
    { name: 'Xiaomi Redmi', price: 10000 }
];

const searchTerm = 'Galaxy';

console.log(searchProductByName(products, searchTerm));

function searchProductByName(products, searchTerm) {
    return products.find(product => product.name.includes(searchTerm));
}