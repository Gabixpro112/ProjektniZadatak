let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, img) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Proizvod dodan u košaricu!");
}

function getPrice(product) {
    const newPrice = product.querySelector(".new-price");
    const price = product.querySelector(".price");

    if (newPrice) {
        return parseFloat(newPrice.innerText.replace(",", "."));
    }

    return parseFloat(price.innerText.replace(",", "."));
}

document.addEventListener("DOMContentLoaded", () => {

    const products = document.querySelectorAll(".product, .ball-card");

    products.forEach(product => {

        const nameEl = product.querySelector("h2, h3");
        const imgEl = product.querySelector("img");

        if (!nameEl || !imgEl) return;
        if (nameEl.innerText.trim() === "") return;

        const name = nameEl.innerText;
        const price = getPrice(product);
        const img = imgEl.src;

        // KREIRAJ GUMB
        const btn = document.createElement("button");
        btn.innerText = "Dodaj u košaricu";
        btn.classList.add("add-btn");

        btn.addEventListener("click", () => {
            addToCart(name, price, img);
        });

        product.appendChild(btn);

    });

});