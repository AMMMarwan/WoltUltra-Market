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

document.getElementById('addProduct1').addEventListener('click', () => addToCart('Alma', 1010100));
document.getElementById('addProduct2').addEventListener('click', () => addToCart('Banán', 2000));
document.getElementById('addProduct3').addEventListener('click', () => addToCart('Barack', 2030));
document.getElementById('addProduct4').addEventListener('click', () => addToCart('Dinnye', 1800));
document.getElementById('addProduct5').addEventListener('click', () => addToCart('Körte', 1110));
document.getElementById('addProduct6').addEventListener('click', () => addToCart('Narancs', 2000));
