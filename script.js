const menuItems = [
    {
        name: "Espresso",
        category: "coffee",
        price: 110,
        icon: "☕",
        description: "Strong and smooth classic Italian espresso."
    },
    {
        name: "Americano",
        category: "coffee",
        price: 130,
        icon: "☕",
        description: "Rich espresso softened with hot water."
    },
    {
        name: "Classic Cappuccino",
        category: "coffee",
        price: 160,
        icon: "☕",
        description: "Rich espresso topped with silky milk foam."
    },
    {
        name: "Café Latte",
        category: "coffee",
        price: 170,
        icon: "🥛",
        description: "Smooth espresso blended with creamy steamed milk."
    },
    {
        name: "Lavender Latte",
        category: "coffee",
        price: 180,
        icon: "☕",
        description: "Smooth espresso with creamy lavender foam."
    },
    {
        name: "Caramel Macchiato",
        category: "coffee",
        price: 190,
        icon: "🥤",
        description: "Espresso, steamed milk and caramel drizzle."
    },
    {
        name: "Hazelnut Mocha",
        category: "coffee",
        price: 200,
        icon: "☕",
        description: "Chocolate espresso with roasted hazelnut."
    },
    {
        name: "Iced Mocha",
        category: "coffee",
        price: 175,
        icon: "🧋",
        description: "Chilled coffee blended with rich chocolate."
    },
    {
        name: "Vanilla Cold Coffee",
        category: "coffee",
        price: 165,
        icon: "🥤",
        description: "Creamy chilled coffee with sweet vanilla."
    },
    {
        name: "Spanish Latte",
        category: "coffee",
        price: 185,
        icon: "☕",
        description: "Espresso with creamy milk and condensed milk."
    },

    {
        name: "Masala Chai",
        category: "tea",
        price: 90,
        icon: "🫖",
        description: "Classic Indian tea brewed with aromatic spices."
    },
    {
        name: "Kashmiri Kahwa",
        category: "tea",
        price: 120,
        icon: "🍵",
        description: "Fragrant green tea with saffron and nuts."
    },
    {
        name: "Classic Green Tea",
        category: "tea",
        price: 100,
        icon: "🍵",
        description: "Light and refreshing freshly brewed green tea."
    },
    {
        name: "Peach Iced Tea",
        category: "tea",
        price: 145,
        icon: "🧋",
        description: "Refreshing iced tea with juicy peach flavor."
    },
    {
        name: "Strawberry Lemonade",
        category: "tea",
        price: 150,
        icon: "🍓",
        description: "Fresh strawberries mixed with sparkling lemonade."
    },

    {
        name: "Strawberry Cake",
        category: "dessert",
        price: 170,
        icon: "🍰",
        description: "Soft vanilla cake with strawberry cream."
    },
    {
        name: "Chocolate Brownie",
        category: "dessert",
        price: 130,
        icon: "🍫",
        description: "Warm fudgy brownie with rich chocolate."
    },
    {
        name: "Blueberry Cheesecake",
        category: "dessert",
        price: 210,
        icon: "🫐",
        description: "Creamy cheesecake topped with blueberries."
    },
    {
        name: "Red Velvet Cake",
        category: "dessert",
        price: 190,
        icon: "🍰",
        description: "Velvety red cake with smooth cream cheese frosting."
    },
    {
        name: "Tiramisu",
        category: "dessert",
        price: 220,
        icon: "🍮",
        description: "Classic coffee-soaked Italian dessert."
    },
    {
        name: "Lotus Biscoff Cheesecake",
        category: "dessert",
        price: 230,
        icon: "🍰",
        description: "Creamy cheesecake with caramelized Biscoff crumbs."
    },
    {
        name: "Cinnamon Roll",
        category: "dessert",
        price: 140,
        icon: "🍥",
        description: "Soft cinnamon roll finished with sweet glaze."
    },
    {
        name: "Chocolate Chip Cookie",
        category: "dessert",
        price: 90,
        icon: "🍪",
        description: "Crunchy outside and soft chocolate center."
    },

    {
        name: "Butter Croissant",
        category: "snacks",
        price: 120,
        icon: "🥐",
        description: "Flaky, buttery and freshly baked."
    },
    {
        name: "Cheese Croissant",
        category: "snacks",
        price: 145,
        icon: "🥐",
        description: "Golden croissant filled with creamy cheese."
    },
    {
        name: "Veggie Sandwich",
        category: "snacks",
        price: 150,
        icon: "🥪",
        description: "Fresh vegetables with creamy house sauce."
    },
    {
        name: "Grilled Cheese Sandwich",
        category: "snacks",
        price: 165,
        icon: "🥪",
        description: "Crispy grilled bread with melted cheese."
    },
    {
        name: "Garlic Bread",
        category: "snacks",
        price: 130,
        icon: "🥖",
        description: "Toasted bread with garlic butter and herbs."
    },
    {
        name: "French Fries",
        category: "snacks",
        price: 110,
        icon: "🍟",
        description: "Golden crispy fries served hot."
    },
    {
        name: "Peri Peri Fries",
        category: "snacks",
        price: 135,
        icon: "🍟",
        description: "Crispy fries tossed in spicy peri peri seasoning."
    }
];


let cart = JSON.parse(localStorage.getItem("velvetBeanCart")) || [];
let currentCategory = "all";


function renderMenu(items = menuItems) {

    const menuGrid = document.getElementById("menuGrid");

    if (items.length === 0) {

        menuGrid.innerHTML = `
            <div class="no-results">
                No delicious match found 😭
            </div>
        `;

        return;
    }

    menuGrid.innerHTML = items.map(item => `

        <div class="menu-card">

            <div class="menu-image">

                ${item.icon}

                <button
                    class="favorite"
                    onclick="toggleFavorite(this)"
                >
                    ♡
                </button>

            </div>

            <div class="menu-card-content">

                <h3>${item.name}</h3>

                <p>
                    ${item.description}
                </p>

                <div class="menu-bottom">

                    <span class="price">
                        ₹${item.price}
                    </span>

                    <button
                        class="add-btn"
                        onclick="addToCart('${item.name}', ${item.price}, '${item.icon}')"
                    >
                        Add +
                    </button>

                </div>

            </div>

        </div>

    `).join("");
}


function filterMenu(category, button) {

    currentCategory = category;

    document.querySelectorAll(".category").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    applyFilters();
}


function searchMenu() {
    applyFilters();
}


function applyFilters() {

    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let filtered = menuItems;

    if (currentCategory !== "all") {

        filtered = filtered.filter(item =>
            item.category === currentCategory
        );

    }

    if (searchValue) {

        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue)
        );

    }

    renderMenu(filtered);
}


function addToCart(name, price, icon) {

    const existingItem = cart.find(
        item => item.name === name
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            icon: icon,
            quantity: 1
        });

    }

    saveCart();
    updateCart();

    showToast(`${name} added to cart 💜`);
}


function addCombo() {

    const existingItem = cart.find(
        item => item.name === "Weekend Coffee Combo"
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: "Weekend Coffee Combo",
            price: 349,
            icon: "☕🍰",
            quantity: 1
        });

    }

    saveCart();
    updateCart();

    showToast("Weekend Combo added 🤎");
}


function updateQuantity(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    updateCart();
}


function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice;

    if (cart.length === 0) {

        cartItems.innerHTML = "";
        emptyCart.style.display = "block";

        return;
    }

    emptyCart.style.display = "none";

    cartItems.innerHTML = cart.map((item, index) => `

        <div class="cart-item">

            <div class="cart-item-icon">
                ${item.icon}
            </div>

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ₹${item.price * item.quantity}
                </p>

            </div>

            <div class="quantity">

                <button
                    onclick="updateQuantity(${index}, -1)"
                >
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="updateQuantity(${index}, 1)"
                >
                    +
                </button>

            </div>

        </div>

    `).join("");
}


function saveCart() {

    localStorage.setItem(
        "velvetBeanCart",
        JSON.stringify(cart)
    );

}


function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("show");

    updateCart();

}


function closeCart(event) {

    if (
        !event ||
        event.target === document.getElementById("cartOverlay")
    ) {

        document
            .getElementById("cartOverlay")
            .classList.remove("show");

    }

}


function checkout() {

    if (cart.length === 0) {

        showToast("Your cart is empty ☕");

        return;
    }

    showToast("Order placed successfully! ✨");

    cart = [];

    saveCart();
    updateCart();

    setTimeout(() => {
        closeCart();
    }, 1200);

}


function toggleFavorite(button) {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {

        button.textContent = "♥";

    } else {

        button.textContent = "♡";

    }

}


function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);

}


function toggleMenu() {

    document
        .querySelector(".navbar")
        .classList.toggle("show");

}


document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelector(".navbar")
            .classList.remove("show");

    });

});


renderMenu();
updateCart();