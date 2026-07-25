// Récupérer les boutons
const buttons = document.querySelectorAll(".add-to-cart");

// Tableau du panier
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Ajouter un produit au panier
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {
            name: button.dataset.name,
            price: Number(button.dataset.price)
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " a été ajouté au panier !");
    });

});
// Affichage du panier
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

if (cartItems && total) {

    let somme = 0;

    cart.forEach(product => {

        const item = document.createElement("div");
        item.className = "cart-item";

        item.innerHTML = `
            <div>
                <h3>${product.name}</h3>
                <p>${product.price} DA</p>
            </div>
        `;

        cartItems.appendChild(item);

        somme += product.price;
    });

    total.textContent = "Total : " + somme + " DA";
}
const orderForm = document.getElementById("order-form");

if(orderForm){

    orderForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Merci ! Votre commande a été enregistrée avec succès.");

        localStorage.removeItem("cart");

        window.location.href="../index.html";

    });

}
