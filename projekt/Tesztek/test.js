let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);  // Eltávolítja az adott indexű elemet a kosárból
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
    ul.classList.add('list-group');

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'cart-item');
        li.textContent = `${item.name} - ${item.price} Ft`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger');
        removeButton.textContent = 'Töröl';
        removeButton.onclick = () => removeFromCart(index);

        li.appendChild(removeButton);
        ul.appendChild(li);
    });

    cartItemsElement.appendChild(ul);

    // Összegzés
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalElement = document.createElement('p');
    totalElement.textContent = `Összesen: ${total} Ft`;
    cartItemsElement.appendChild(totalElement);
}

document.getElementById('addProduct1').addEventListener('click', () => addToCart('Tasdmék 1', 1123123000));
document.getElementById('addProduct2').addEventListener('click', () => addToCart('Termék 2', 2000));
document.getElementById('addProduct2').addEventListener('click', () => addToCart('Termék 2', 2000));
