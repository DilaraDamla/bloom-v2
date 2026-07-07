const buttons = document.querySelectorAll(".add-to-cart");

const message = document.getElementById("cart-message");
const count = document.getElementById("cart-count");

const cartButton = document.getElementById("cart");
const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const productName = card.dataset.name;
        const productPrice = Number(card.dataset.price);


        const existingProduct = cart.find(
            product => product.name === productName
        );


        if(existingProduct){

            existingProduct.quantity++;

        } else {

            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1
            });

        }


        updateCart();
        localStorage.setItem("cart", JSON.stringify(cart));


        if(message){

            message.classList.add("show");

            setTimeout(() => {
                message.classList.remove("show");
            },2500);

        }

    });

});



function updateCart(){
    localStorage.setItem("cart", JSON.stringify(cart));

    cartItems.innerHTML = "";

    let total = 0;
    let totalQuantity = 0;


    cart.forEach((product,index)=>{


        total += product.price * product.quantity;

        totalQuantity += product.quantity;


        cartItems.innerHTML += `

        <div class="cart-item">

            <span>
            ${product.name}
            <br>
            ${product.quantity} adet
            </span>


            <span>
            ${product.price * product.quantity} ₺
            </span>


          <div class="quantity">

<button onclick="removeProduct(${index})">
➖
</button>

<span>
${product.quantity}
</span>

<button onclick="addProduct(${index})">
➕
</button>

</div>

        `;


    });


    count.textContent = totalQuantity;

    cartTotal.textContent = total;


}



function removeProduct(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    } else {

        cart.splice(index,1);

    }

    updateCart();

}



cartButton.addEventListener("click",()=>{


    if(cartPanel.style.display === "block"){

        cartPanel.style.display="none";

    }else{

        cartPanel.style.display="block";

    }


});
function addProduct(index){

    cart[index].quantity++;

    updateCart();

}
updateCart();