const buttons = document.querySelectorAll(".buy-btn");

const message = document.getElementById("cart-message");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        message.classList.add("show");

        setTimeout(() => {
            message.classList.remove("show");
        }, 2500);

    });

});