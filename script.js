const buttons = document.querySelectorAll(".add-to-cart");

const message = document.getElementById("cart-message");
const count = document.getElementById("cart-count");
const cartButton = document.getElementById("cart");
const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = [];

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const productName = card.dataset.name;
        const productPrice = Number(card.dataset.price);

        cart.push({
            name: productName,
            price: productPrice
        });

        count.textContent = cart.length;

        if (message) {
            message.classList.add("show");

            setTimeout(() => {
                message.classList.remove("show");
            }, 2500);
        }

        console.log(cart);
        updateCart();

    });

});
function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(product => {

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${product.name}</span>
            <span>${product.price} ₺</span>
        </div>
        `;

        total += product.price;

    });

    cartTotal.textContent = total;

}
cartButton.addEventListener("click", () => {

    if (cartPanel.style.display === "block") {
        cartPanel.style.display = "none";
    } else {
        cartPanel.style.display = "block";
    }

});