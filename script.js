// Navigation entre les sections
const links = document.querySelectorAll("nav li, .cta, .cat-card, .blog-item");
links.forEach(link => {
    link.addEventListener("click", () => {
        const section = link.dataset.section;
        if (!section) return;

        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById(section).classList.add("active");
        window.scrollTo(0, 0);
    });
});

// Panier
let cart = [];
const cartBox = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        cart.push({ name: btn.dataset.name, price: Number(btn.dataset.price) });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.name} - ${item.price}€</p>`;
    });
    cartTotal.textContent = total;
}

// Ouvrir / fermer panier
document.getElementById("open-cart").addEventListener("click", () => {
    cartBox.classList.remove("hidden");
});
document.getElementById("close-cart").addEventListener("click", () => {
    cartBox.classList.add("hidden");
});

// Chat
document.getElementById("chat-widget").addEventListener("click", () => {
    document.getElementById("chat-box").classList.toggle("hidden");
});


