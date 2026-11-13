const peso = n => "₱" + Number(n).toLocaleString("en-PH");
const imgCoffee = "https://loremflickr.com";
const imgIced = "https://loremflickr.com";
const imgPasta = "https://loremflickr.com";
const imgRice = "https://loremflickr.com";
const imgFries = "https://loremflickr.com";
const imgMatcha = "https://loremflickr.com";
const imgSoda = "https://loremflickr.com";
const imgCake = "https://loremflickr.com";

const productImages = {
    "Tocilog": "Pictures/tocilog.jpg",
    "Cornsilog": "Pictures/corncilog.jpg",
    "Hotsilog": "Pictures/hotcilog.jpg",
    "Porksilog": "Pictures/porksilog.jpg",
    "Hungarian": "Pictures/hungarian.jpg",
    "Spamsilog": "Pictures/spamsilog.jpg",
    "Fried Rice": "Pictures/friedrice.jpg",
    "Fried Egg": "Pictures/friedegg.webp",
    "Creamy Chicken Pesto": "Pictures/creamychickenpasta.jpg",
    "Carbonara Pasta": "Pictures/creamycarbonara.jpg",
    "Cajun Pasta": "Pictures/cajunpasta.jpg",
    "Cheese Fries": "Pictures/cheesefries.jpeg",
    "Sour Cream Fries": "Pictures/sourcreamfries.jpg",
    "BBQ Fries": "Pictures/bbqfries.webp",
    "Chili Cheese Fries": "Pictures/chillicheesefries.jpg",
    "Chili BBQ Fries": "Pictures/chillibbqfries.jpg",
    "Truffle Fries": "Pictures/trufflefries.jpg",
    "Sweet Corn Fries": "Pictures/sweetcornfries.jpg",
    "Sour Cheese Fries": "Pictures/sourcheesefries.jpg",
    "Study Break Meal": "Pictures/studybreakmeal.jpg",

    "Americano": { hot: "Pictures/hotamericano.jpg", iced: "Pictures/icedamericano.jpg" },
    "Cappuccino": { hot: "Pictures/hotcappuccino.jpg", iced: "Pictures/icedcappuccino.jpg" },
    "Flat White": "Pictures/flatwhite.jpg",
    "Latte": { hot: "Pictures/latte.jpg", iced: "Pictures/icedlatte.jpg" },
    "Vanilla Latte": { hot: "Pictures/vanillalatte.jpg", iced: "Pictures/icedvanillalatte.jpg" },
    "Caramel Latte": { hot: "Pictures/caramellatte.jpg", iced: "Pictures/icedcaramellatte.jpg" },
    "Hazelnut Latte": { hot: "Pictures/hazelnutlatte.jpg", iced: "Pictures/icedhazelnutlatte.jpg" },
    "Spanish Latte": { hot: "Pictures/spanishlatte.jpg", iced: "Pictures/icedspanishlatte.jpg" },
    "Caramel Macchiato": { hot: "Pictures/caramelmacchiato.jpg", iced: "Pictures/IcedCaramelMacchiato.jpg" },
    "Classic Breve": { hot: "Pictures/classicbreve.webp", iced: "Pictures/icedclassicbreve.jpg" },
    "Mocha": { hot: "Pictures/mocha.jpg", iced: "Pictures/icedmocha.jpg" },
    "White Mocha": { hot: "Pictures/whitemocha.jpg", iced: "Pictures/icedwhitemocha.jpg" },
    "Salted Caramel": { hot: "Pictures/saltedcaramel.jpg", iced: "Pictures/icedsaltedcaramel.jpg" },
    "Black & White Mocha": { hot: "Pictures/blackandwhitemocha.jpg", iced: "Pictures/icedblack&whitemocha.jpg" },
    
    "Seasalt Latte": "Pictures/icedseasaltlatte.jpg",
    "Butterscotch Latte": "Pictures/icedbutterscot.jpg",
    "Black & White": "Pictures/icedblack&whitemocha.jpg",
    "Double Chocolate": "Pictures/iceddoublechocolate.jpg",
    "Java Chip": "Pictures/javachip.jpg",
    "Coffee Jelly": "Pictures/coffeejelly.jpg",
    "Chocolate (Hot / Iced)": "Pictures/chocolatehotoriced.jpg",
    "Strawberrylicious": "Pictures/strawberrylicious.jpg",
    "Chocoberry": "Pictures/chocoberry.jpg",
    "Cookies N' Cream": "Pictures/cookiesncream.jpg",
    "Chocolate Chip": "Pictures/chocolatechip.jpg",
    "Matcha Latte (Hot / Iced)": "Pictures/matchalattehotoriced.jpg",
    "Matcha Frappe": "Pictures/matchafrappe.jpg",
    "Dirty Matcha": "Pictures/dirtymatcha.jpg",
    "Seasalt Matcha": "Pictures/seasaltmatcha.jpg",
    "Strawberry Matcha": "Pictures/strawberrymatcha.jpg",
    "Mango Peach": "Pictures/mangopeach.jpg",
    "Green Apple": "Pictures/apple.jpg",
    "Blueberry": "Pictures/blueberry.jpg",
    "Strawberry": "Pictures/strawberrysoda.jpg",
    "Honey Peach": "Pictures/honeypeach.jpg",
    "Passion Fruit": "Pictures/passion.jpg",
    "Kiwi": "Pictures/kiwi.jpg",
    "Lychee": "Pictures/lychee.jpg",
    "Lemon": "Pictures/lemon.jpg",
    "Shaken Americano": "Pictures/shakenamericano.jpg",
    "Orange Americano": "Pictures/Orange Americano.jpg",
    "Crème Brûlée": "Pictures/crèmebrûlée.jpg",
    "Tiramisu Latte": "Pictures/tiramisulatte.jpg",
    "Mattheo's Butterbeer": "Pictures/butterbeer.jpg"
};


const products = [];

function add(name, category, price, options = {}, description = "", badge = "", fallbackImage = imgCoffee) {
    let resolvedImage = productImages[name];
    if (resolvedImage && typeof resolvedImage === "object" && !Array.isArray(resolvedImage)) {
        if (category.includes("Hot")) {
            resolvedImage = resolvedImage.hot;
        } else if (category.includes("Iced")) {
            resolvedImage = resolvedImage.iced;
        } else {
            resolvedImage = resolvedImage.hot; 
        }
    }

    products.push({
        id: products.length + 1,
        name,
        category,
        price,
        options,
        description,
        badge,
        image: resolvedImage || fallbackImage || "https://placehold.co",
        available: true
    });
}


[
    ["Tocilog", 109],
    ["Cornsilog", 109],
    ["Hotsilog", 119],
    ["Porksilog", 119],
    ["Hungarian", 119],
    ["Spamsilog", 139]
].forEach(([n, p]) => add(n, "Rice Meals", p, {}, "Rice meal served fresh.", "", imgRice));

add("Fried Rice", "Add-ons", 20, {}, "Add-on");
add("Fried Egg", "Add-ons", 15, {}, "Add-on");
add("Creamy Chicken Pesto", "Pasta", 199, {}, "Twirl pasta in creamy pesto sauce, topped with crispy breaded chicken and Parmesan. Served with toasted bread.", "", imgPasta);
add("Carbonara Pasta", "Pasta", 199, {}, "Linguine in a rich, creamy sauce with savory bacon and mushrooms, finished with Parmesan. Served with toasted bread.", "", imgPasta);
add("Cajun Pasta", "Pasta", 209, {}, "Linguine pasta with a rich, creamy sauce, savory bacon and mushrooms, finished with Parmesan. Served with toasted bread.", "", imgPasta);

["Cheese", "Sour Cream", "BBQ", "Chili Cheese", "Chili BBQ"].forEach(n => add(n + " Fries", "Fries", 80, {}, "Choose your favorite fries flavor.", "", imgFries));
["Truffle", "Sweet Corn", "Sour Cheese"].forEach(n => add(n + " Fries", "Fries", 85, {}, "Fries flavor.", "", imgFries));

add("Study Break Meal", "Study Break", 75, {}, "Rice + egg of your choice + ulam of your choice. Present your student ID.", "STUDENT FAVORITE", imgRice);

const hot = [
    ["Americano", 100, "Pictures/hotamericano.jpg"],
    ["Cappuccino", 120, "Pictures/hotcappuccino.jpg"],
    ["Flat White", 120, "Pictures/flatwhite.jpg"],
    ["Latte", 120, "Pictures/hotlatte.jpg"],
    ["Vanilla Latte", 135, "Pictures/hotvanillalatte.jpg"],
    ["Caramel Latte", 135, "Pictures/hotcaramellatte.jpg"],
    ["Hazelnut Latte", 135, "Pictures/hothazelnutlatte.jpg"],
    ["Spanish Latte", 135, "Pictures/hotspanishlatte.jpg"],
    ["Caramel Macchiato", 135, "Pictures/hotcaramelmacchiato.jpg"],
    ["Classic Breve", 135, "Pictures/classicbreve.webp"],
    ["Mocha", 145, "Pictures/hotmocha.jpg"],
    ["White Mocha", 145, "Pictures/hotwhitemocha.jpg"],
    ["Salted Caramel", 145, "Pictures/hotsaltedcaramel.jpg"],
    ["Black & White Mocha", 145, "Pictures/Black & White Mocha.jpg"]
];

hot.forEach(([n, p, imgFile]) => add(
    n,
    "Hot Coffee",
    p,
    {},
    "Hot coffee, 12oz, one size.",
    ["Vanilla Latte", "Caramel Macchiato"].includes(n)
        ? "BEST SELLER"
        : ["Spanish Latte", "White Mocha"].includes(n)
            ? "MUST TRY"
            : "",
    imgCoffee,
    imgFile 
));


const iced = [
    ["Americano", 100, 115, "Pictures/icedamericano.jpg"],
    ["Cappuccino", 120, 135, "Pictures/icedcappuccino.jpg"],
    ["Latte", 120, 135, "Pictures/icedlatte.jpg"],
    ["Vanilla Latte", 135, 150, "Pictures/icedvanillalatte.jpg"],
    ["Caramel Latte", 135, 150, "Pictures/icedcaramellatte.jpg"],
    ["Hazelnut Latte", 135, 150, "Pictures/icedhazelnutlatte.jpg"],
    ["Spanish Latte", 135, 150, "Pictures/icedspanishlatte.jpg"],
    ["Seasalt Latte", 135, 150, "Pictures/icedseasaltlatte.jpg"],
    ["Butterscotch Latte", 135, 150, "Pictures/icedbutterscotchlatte.jpg"],
    ["Caramel Macchiato", 135, 150, "Pictures/icedcaramelmacchiato.jpg"],
    ["Classic Breve", 135, 150, "Pictures/icedclassicbreve.webp"],
    ["Mocha", 145, 160, "Pictures/icedmocha.jpg"],
    ["White Mocha", 145, 160, "Pictures/icedwhitemocha.jpg"],
    ["Salted Caramel", 145, 160, "Pictures/icedsaltedcaramel.jpg"],
    ["Black & White", 145, 160, "Pictures/icedblackandwhitemocha.jpg"]
];

iced.forEach(([n, m, l, imgFile]) => add(
    n,
    "Iced Coffee",
    m,
    { Medium: m, Large: l },
    "Iced coffee, choose Medium or Large.",
    ["Spanish Latte", "Caramel Macchiato"].includes(n)
        ? "BEST SELLER"
        : ["Seasalt Latte", "Classic Breve", "Salted Caramel"].includes(n)
            ? "MUST TRY"
            : "",
    imgIced,
    imgFile 
));


[
    ["Double Chocolate", 145, 160],
    ["Salted Caramel", 145, 160],
    ["Java Chip", 155, 170],
    ["Coffee Jelly", 155, 170]
].forEach(([n, m, l]) => add(
    n,
    "Blended Coffee",
    m,
    { Medium: m, Large: l },
    "Blended coffee, choose Medium or Large.",
    n === "Java Chip" ? "BEST SELLER" : n === "Salted Caramel" ? "MUST TRY" : "",
    imgIced
));

[
    ["Chocolate (Hot / Iced)", 105, 120],
    ["Strawberrylicious", 105, 120],
    ["Chocoberry", 115, 130],
    ["Cookies N' Cream", 120, 135],
    ["Chocolate Chip", 135, 150]
].forEach(([n, m, l]) => add(
    n,
    "Non-Coffee",
    m,
    { Medium: m, Large: l },
    "A refreshing non-coffee drink.",
    ["Cookies N' Cream", "Chocolate Chip"].includes(n)
        ? "BEST SELLER"
        : n === "Chocoberry"
            ? "MUST TRY"
            : "",
    n.includes("Strawberry") ? imgSoda : imgCake
));

[
    ["Matcha Latte (Hot / Iced)", 145, 160],
    ["Matcha Frappe", 155, 170],
    ["Dirty Matcha", 155, 170],
    ["Seasalt Matcha", 155, 170],
    ["Strawberry Matcha", 155, 170]
].forEach(([n, m, l]) => add(
    n,
    "Matcha",
    m,
    { Medium: m, Large: l },
    "Matcha series, choose Medium or Large.",
    ["Seasalt Matcha", "Strawberry Matcha"].includes(n) ? "BEST SELLER" : "",
    imgMatcha
));

[
    "Mango Peach",
    "Green Apple",
    "Blueberry",
    "Strawberry",
    "Honey Peach",
    "Passion Fruit",
    "Kiwi",
    "Lychee",
    "Lemon"
].forEach(n => add(n, "Fruit Soda", 50, { Medium: 50, Large: 65 }, "Fruit soda, choose Medium or Large.", "", imgSoda));

add("Shaken Americano", "Signature Drinks", 115, { Medium: 115, Large: 130 }, "Choose Vanilla, Caramel, Hazelnut, or Butterscotch.", "MUST TRY", imgIced);
add("Orange Americano", "Signature Drinks", 130, { Medium: 130, Large: 145 }, "Mattheo's signature drink.", "MUST TRY", imgIced);
add("Crème Brûlée", "Signature Drinks", 140, { Medium: 140, Large: 155 }, "Mattheo's signature drink.", "", imgCoffee);
add("Tiramisu Latte", "Signature Drinks", 140, { Medium: 140, Large: 155 }, "Mattheo's signature drink.", "BEST SELLER", imgCoffee);
add("Mattheo's Butterbeer", "Signature Drinks", 150, { Medium: 150, Large: 165 }, "Mattheo's signature drink.", "MUST TRY", imgCake);

[
    ["Espresso", 40],
    ["Oatside Milk", 40],
    ["Sauce", 30],
    ["Syrup", 20],
    ["Nata / Popping", 20],
    ["Cold Foam", 25],
    ["Whipped Cream", 25],
    ["Coffee Jelly", 25]
].forEach(([n, p]) => add(n, "Add-ons", p, {}, "Drink add-on."));

let cart = [];
let orders = JSON.parse(localStorage.getItem("mattheoOrders") || "[]");
let customers = JSON.parse(localStorage.getItem("mattheoCustomers") || "[]");
let currentCategory = "All";

const $ = id => document.getElementById(id);

const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}[c]));

function cardHTML(p, compact = false) {
    const options = Object.keys(p.options || {});
    const hasSizes = options.length === 2 && options.includes("Medium") && options.includes("Large");

    let optionsHTML = "";
    if (options.length) {
        optionsHTML = `<div class="price-options">`;
        if (hasSizes) {
            optionsHTML += `
                <button type="button" class="price-chip size-toggle-btn active" data-product-id="${p.id}" data-change-size="Medium">
                    Medium<strong>${peso(p.options["Medium"])}</strong>
                </button>
                <button type="button" class="price-chip size-toggle-btn" data-product-id="${p.id}" data-change-size="Large">
                    Large<strong>${peso(p.options["Large"])}</strong>
                </button>
            `;
        } else {
            optionsHTML += options.map(k => `<span class="price-chip">${k}<strong>${peso(p.options[k])}</strong></span>`).join("");
        }
        optionsHTML += `</div>`;
    }

    return `<article class="${compact ? "product-card" : "menu-card"}" id="product-card-${p.id}">
        <div class="product-photo">
            <img loading="lazy" src="${p.image}" alt="${escapeHTML(p.name)}">
            ${p.badge ? `<span class="product-badge">${escapeHTML(p.badge)}</span>` : ""}
        </div>
        <div class="product-info">
            <h3>${escapeHTML(p.name)}</h3>
            <p>${escapeHTML(p.description || "Freshly prepared at Mattheo's Brew Café.")}</p>
            ${optionsHTML}
            <div class="product-row">
                <span class="price">${options.length ? "From " + peso(Math.min(...Object.values(p.options))) : peso(p.price)}</span>
                <button class="add-button" data-add="${p.id}">+ Add</button>
            </div>
        </div>
    </article>`;
}


function renderFavorites() {
    const fav = products.filter(p =>
        p.available && (
            p.badge === "BEST SELLER" ||
            ["Tocilog", "Creamy Chicken Pesto", "Study Break Meal"].includes(p.name)
        )
    ).slice(0, 4);

    const grid = $("favoritesGrid");
    if (grid) grid.innerHTML = fav.map(p => cardHTML(p, true)).join("");
}

function renderMenu() {
    const search = $("searchInput");
    const grid = $("menuGrid");

    if (!search || !grid) return;

    const query = search.value.trim().toLowerCase();

    const filtered = products.filter(p =>
        (currentCategory === "All" || p.category === currentCategory) &&
        p.available &&
        (p.name + " " + p.category + " " + p.description).toLowerCase().includes(query)
    );

    grid.innerHTML = filtered.length
        ? filtered.map(p => cardHTML(p)).join("")
        : `<div class="no-results">No products found. Try another search.</div>`;

    const count = $("menuResultCount");
    if (count) count.textContent = `${filtered.length} items`;

    document.querySelectorAll(".category-tab").forEach(b => {
        b.classList.toggle("active", b.dataset.category === currentCategory);
    });
}

function showToast(msg) {
    const toast = $("toast");
    if (!toast) return;

    toast.textContent = msg;
    toast.classList.add("show");

    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function openCart() {
    $("cartOverlay")?.classList.add("show");
    $("cartDrawer")?.classList.add("open");
}

function closeCart() {
    $("cartOverlay")?.classList.remove("show");
    $("cartDrawer")?.classList.remove("open");
}

function addToCart(id, options = {}) {
    const p = products.find(x => x.id === Number(id));
    if (!p || !p.available) return;

    const key = `${p.id}-${options.size || ""}-${options.variation || ""}-${options.egg || ""}-${options.ulam || ""}`;
    const existing = cart.find(x => x.key === key);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            key,
            id: p.id,
            name: options.displayName || p.name,
            price: options.price ?? p.price,
            qty: 1,
            image: p.image,
            options
        });
    }

    renderCart();
    showToast(`${p.name} added to cart`);
}

function renderCart() {
    const count = cart.reduce((s, x) => s + x.qty, 0);
    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);

    if ($("cartFabCount")) $("cartFabCount").textContent = count;
    if ($("cartTotal")) $("cartTotal").textContent = peso(total);
    if ($("checkoutTotal")) $("checkoutTotal").textContent = peso(total);

    const cartItems = $("cartItems");
    if (!cartItems) return;

    cartItems.innerHTML = cart.length
        ? cart.map(x => `<div class="cart-line">
            <img src="${x.image}" alt="">
            <div>
                <h4>${escapeHTML(x.name)}</h4>
                <p>${peso(x.price)} each</p>
                <div class="quantity-controls">
                    <button data-qty="-1" data-key="${x.key}">−</button>
                    <span>${x.qty}</span>
                    <button data-qty="1" data-key="${x.key}">+</button>
                    <button data-remove="${x.key}" title="Remove">×</button>
                </div>
            </div>
            <span class="line-price">${peso(x.price * x.qty)}</span>
        </div>`).join("")
        : `<div class="empty-cart">Your cart is waiting for something good. ♡</div>`;
}

let confirmResolve = null;

function askConfirm(title, message, yesLabel = "Yes", noLabel = "Go Back") {
    return new Promise(resolve => {
        if (confirmResolve) confirmResolve(false);
        confirmResolve = resolve;

        $("confirmTitle").textContent = title;
        $("confirmMessage").textContent = message;
        $("confirmYes").textContent = yesLabel;
        $("confirmNo").textContent = noLabel;
        showModal("confirmModal");
    });
}

function answerConfirm(value) {
    hideModal("confirmModal");

    if (confirmResolve) {
        const resolve = confirmResolve;
        confirmResolve = null;
        resolve(value);
    }
}

$("confirmYes")?.addEventListener("click", () => answerConfirm(true));
$("confirmNo")?.addEventListener("click", () => answerConfirm(false));
$("confirmModal")?.addEventListener("click", e => {
    if (e.target.id === "confirmModal") answerConfirm(false);
});

async function confirmCancelOrder(modalId) {
    const isStudy = modalId === "studyModal";
    const ok = await askConfirm(
        "Cancel this order?",
        isStudy
            ? "Your Study Break Meal choices will be cleared."
            : "Your items stay in the cart. You can place the order later.",
        "Yes, Cancel",
        "Keep Order"
    );

    if (ok) hideModal(modalId);
}

function showModal(id) {
    $(id)?.classList.add("show");
}

function hideModal(id) {
    $(id)?.classList.remove("show");
}

function updateStorage() {
    localStorage.setItem("mattheoOrders", JSON.stringify(orders));
    localStorage.setItem("mattheoCustomers", JSON.stringify(customers));
}

document.addEventListener("click", e => {
    const sizeToggleBtn = e.target.closest("[data-change-size]");
    if (sizeToggleBtn) {
        const productId = sizeToggleBtn.dataset.productId;
        const card = document.getElementById(`product-card-${productId}`);
        
        if (card) {
            card.querySelectorAll("[data-change-size]").forEach(btn => btn.classList.remove("active"));
            sizeToggleBtn.classList.add("active");
        }
        return;
    }

    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
        const p = products.find(x => x.id === Number(addBtn.dataset.add));
        if (!p || !p.available) return;

        const keys = Object.keys(p.options || {});

        if (keys.length) {
            let selected;

            if (keys.length === 2 && keys.includes("Medium") && keys.includes("Large")) {
                const card = document.getElementById(`product-card-${p.id}`);
                const activeBtn = card ? card.querySelector("[data-change-size].active") : null;
                
                selected = activeBtn ? activeBtn.dataset.changeSize : "Medium"; 
            } else {
                selected = keys[0];
            }

            addToCart(p.id, {
                size: selected,
                price: p.options[selected],
                displayName: `${p.name} (${selected})`
            });
        } else {
            addToCart(p.id);
        }

        return;
    }


    if (e.target.closest("#cartFab")) {
        openCart();
        return;
    }

    if (e.target.closest("#closeCart")) {
        closeCart();
        return;
    }

    if (e.target.id === "cartOverlay") {
        closeCart();
        return;
    }

    const qty = e.target.closest("[data-qty]");

    if (qty) {
        const item = cart.find(x => x.key === qty.dataset.key);

        if (item) {
            if (item.qty + Number(qty.dataset.qty) <= 0) {
                askConfirm("Remove item?", `Remove ${item.name} from your cart?`, "Yes, Remove", "Keep It").then(ok => {
                    if (ok) {
                        cart = cart.filter(x => x.key !== item.key);
                        renderCart();
                    }
                });
            } else {
                item.qty += Number(qty.dataset.qty);
                renderCart();
            }
        }

        return;
    }

    const remove = e.target.closest("[data-remove]");

    if (remove) {
        const item = cart.find(x => x.key === remove.dataset.remove);
        const key = remove.dataset.remove;

        askConfirm("Remove item?", `Remove ${item ? item.name : "this item"} from your cart?`, "Yes, Remove", "Keep It").then(ok => {
            if (ok) {
                cart = cart.filter(x => x.key !== key);
                renderCart();
            }
        });

        return;
    }

    const category = e.target.closest("[data-category]");

    if (category) {
        currentCategory = category.dataset.category;
        renderMenu();
        return;
    }

    const close = e.target.closest("[data-close]");

    if (close) {
        const id = close.dataset.close;

        if (id === "checkoutModal" || id === "studyModal") {
            confirmCancelOrder(id);
        } else {
            hideModal(id);
        }

        return;
    }

});

$("searchInput")?.addEventListener("input", renderMenu);

$("checkoutButton")?.addEventListener("click", () => {
    if (!cart.length) {
        showToast("Add an item to your cart first.");
        return;
    }

    closeCart();
    showModal("checkoutModal");
});

$("checkoutForm")?.addEventListener("submit", async e => {
    e.preventDefault();

    const formEl = e.target;

    if (!cart.length) return;

    const data = new FormData(formEl);
    const customer = String(data.get("customerName") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!customer || !phone) {
        showToast("Please enter your name and contact number.");
        return;
    }

    const orderTotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
    const placeIt = await askConfirm(
        "Place this order?",
        `Your total is ${peso(orderTotal)}. Submit the order to the café?`,
        "Yes, Place Order",
        "Go Back"
    );

    if (!placeIt || !cart.length) return;

    const order = {
        id: Date.now(),
        customer,
        phone,
        orderType: data.get("orderType"),
        notes: data.get("notes"),
        items: cart.map(x => ({ ...x })),
        total: cart.reduce((s, x) => s + x.price * x.qty, 0),
        status: "Pending",
        date: new Date().toLocaleDateString("en-PH")
    };

    orders.push(order);

    const existing = customers.find(c => c.phone === phone);

    if (existing) {
        existing.orderCount++;
        existing.lastOrder = order.date;
        existing.name = customer;
    } else {
        customers.push({
            name: customer,
            phone,
            orderCount: 1,
            lastOrder: order.date
        });
    }

    updateStorage();
    cart = [];
    renderCart();
    formEl.reset();
    hideModal("checkoutModal");

    const success = $("successMessage");

    if (success) {
        success.textContent = `Thank you, ${customer}. Your order #${String(order.id).slice(-4)} has been recorded in this website demo.`;
    }

    showModal("successModal");
});

$("studyOrder")?.addEventListener("click", () => showModal("studyModal"));

$("studyForm")?.addEventListener("submit", async e => {
    e.preventDefault();

    const formEl = e.target;
    const data = new FormData(formEl);
    const qty = Math.max(1, Number(data.get("quantity")) || 1);
    const ulam = data.get("ulam");
    const egg = data.get("egg");
    const product = products.find(x => x.name === "Study Break Meal");

    if (!product || !ulam || !egg) {
        showToast("Please choose your ulam and egg.");
        return;
    }

    const addIt = await askConfirm(
        "Add this meal?",
        `${qty} x Study Break Meal (${ulam}, ${egg}) for ${peso(75 * qty)}.`,
        "Yes, Add",
        "Go Back"
    );

    if (!addIt) return;

    for (let i = 0; i < qty; i++) {
        addToCart(product.id, {
            price: 75,
            displayName: `Study Break Meal · ${ulam} · ${egg}`,
            ulam,
            egg
        });
    }

    hideModal("studyModal");
    formEl.reset();
    openCart();
});

$("menuToggle")?.addEventListener("click", () => {
    $("nav")?.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(a => {
    a.addEventListener("click", () => $("nav")?.classList.remove("open"));
});

document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    if (backdrop.id === "confirmModal") return;

    backdrop.addEventListener("click", e => {
        if (e.target !== backdrop) return;

        if (backdrop.id === "checkoutModal" || backdrop.id === "studyModal") {
            confirmCancelOrder(backdrop.id);
        } else {
            hideModal(backdrop.id);
        }
    });
});

renderFavorites();
renderMenu();
renderCart();

/* Reviews */

(function () {
    const KEY = "mattheoReviews";
    const list = $("reviewsList");
    const summary = $("reviewsSummary");
    const form = $("reviewForm");
    const starBox = $("starInput");

    if (!list || !form || !starBox) return;

    let reviews = [];
    let rating = 0;

    try {
        const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
        reviews = Array.isArray(saved) ? saved : [];
    } catch (err) {
        reviews = [];
    }

    const starBtns = [...starBox.querySelectorAll(".star-btn")];
    const stars = n => "★".repeat(n) + "☆".repeat(5 - n);

    const paint = n => starBtns.forEach(b => {
        b.classList.toggle("on", Number(b.dataset.value) <= n);
    });

    function save() {
        try {
            localStorage.setItem(KEY, JSON.stringify(reviews));
        } catch (err) {
            showToast("Could not save your review on this device.");
        }
    }

    function render() {
        if (!reviews.length) {
            list.innerHTML = '<div class="reviews-empty">No reviews yet. Be the first to share your visit.</div>';
            summary.innerHTML = "";
            return;
        }

        const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

        summary.innerHTML = `<strong>${avg.toFixed(1)} / 5</strong>` +
            `<span class="stars">${stars(Math.round(avg))}</span><br>` +
            `${reviews.length} review${reviews.length === 1 ? "" : "s"}`;

        list.innerHTML = reviews.map(r => {
            const date = new Date(r.date).toLocaleDateString("en-PH", {
                year: "numeric",
                month: "short",
                day: "numeric"
            });

            return `<article class="review-item">
                <div class="stars">${stars(r.rating)}</div>
                <p>${escapeHTML(r.comment)}</p>
                <div class="review-meta"><strong>${escapeHTML(r.name)}</strong><span>${date}</span></div>
            </article>`;
        }).join("");
    }

    starBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            rating = Number(btn.dataset.value);
            paint(rating);
            $("ratingError").textContent = "";
        });

        btn.addEventListener("mouseenter", () => paint(Number(btn.dataset.value)));
    });

    starBox.addEventListener("mouseleave", () => paint(rating));

    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = form.elements.name.value.trim();
        const comment = form.elements.comment.value.trim();

        if (!name || !comment) {
            showToast("Please enter your name and review.");
            return;
        }

        if (!rating) {
            $("ratingError").textContent = "Please choose a star rating.";
            return;
        }

        reviews.unshift({
            name: name.slice(0, 40),
            rating,
            comment: comment.slice(0, 400),
            date: new Date().toISOString()
        });

        save();
        render();
        form.reset();
        rating = 0;
        paint(0);
        showToast("Thank you for your review.");
    });

    render();
})();
