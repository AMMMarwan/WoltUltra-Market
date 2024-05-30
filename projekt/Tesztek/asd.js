let cart = [];

// Betöltjük a kosár tartalmát a localStorage-ból, ha van
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Kosár mentése a localStorage-ba
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartDisplay();
    saveCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);  // Eltávolítja az adott indexű elemet a kosárból
    updateCartDisplay();
    saveCart();
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

// Eseményfigyelők hozzáadása minden "Kosárba" gombhoz
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'), 10);
        addToCart(name, price);
    });
});

// Az oldal betöltésekor betöltjük a kosár tartalmát
window.addEventListener('load', loadCart);
