const cart = [
    { name: 'Notebook', price: 250 },
    { name: 'Pen', price: 20 },
    { name: 'Eraser', price: 10 }
];

const summary = calculateCartSummary(cart);

console.log(`รายการสินค้า: ${summary.itemNames}`);
console.log(`ราคารวม: ${summary.total} บาท`);

function calculateCartSummary(cart) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const itemNames = cart.map(item => item.name).join(", ");
    return { total, itemNames };
}