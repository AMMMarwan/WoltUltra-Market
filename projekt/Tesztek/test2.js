let cart = [];

function addToCart(productName, productPrice) {
    // Termék hozzáadása a kosárhoz
    cart.push({ name: productName, price: productPrice });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Kosár kiürítése a frissítéshez

    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>A kosár üres</p>';
        return;
    }

    const ul = document.createElement('ul');
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} Ft`;
        ul.appendChild(li);
    });

    cartItemsElement.appendChild(ul);

    // Összegzés
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalElement = document.createElement('p');
    totalElement.textContent = `Összesen: ${total} Ft`;
    cartItemsElement.appendChild(totalElement);
}
