/* ===================================
   LAPTOP STORE
   PART 1
   PRODUCT DISPLAY
=================================== */

const productContainer = document.getElementById("featured-products");

if (productContainer) {

    let currentProducts = [...laptops];

    const page = window.location.pathname.split("/").pop();

    switch (page) {

        case "hp.html":
            currentProducts = laptops.filter(p => p.brand === "HP");
            break;

        case "dell.html":
            currentProducts = laptops.filter(p => p.brand === "Dell");
            break;

        case "lenovo.html":
            currentProducts = laptops.filter(p => p.brand === "Lenovo");
            break;

        case "asus.html":
            currentProducts = laptops.filter(p => p.brand === "ASUS");
            break;

        case "acer.html":
            currentProducts = laptops.filter(p => p.brand === "Acer");
            break;

        default:

    currentProducts = laptops.slice(0,5);

    break;
    }

    displayProducts(currentProducts);

}


function displayProducts(products){

    productContainer.innerHTML = "";

    if(products.length === 0){

        productContainer.innerHTML = `
        <h2 style="text-align:center;">
            No Products Found
        </h2>
        `;

        return;

    }

    products.forEach(product=>{

        productContainer.innerHTML += `

        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.brand}</p>

                <div class="rating">

                    ${product.rating}

                </div>

                <div class="price">

                    ₹${product.price}

                    <span class="old-price">

                        ₹${product.oldPrice}

                    </span>

                </div>

                <p class="offer">

                    Limited Time Offer

                </p>

                <div class="btn-group">

                    <button
                    class="wishlist-btn"
                    onclick="addToWishlist(${product.id})">

                        ❤️ Wishlist

                    </button>

                    <button
                    class="cart-btn"
                    onclick="openProduct(${product.id})">

                        View Details

                    </button>

                    <button
                    class="buy-btn"
                    onclick="buyNow(${product.id})">

                        Buy Now

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}
/* ===================================
   LAPTOP STORE
   PART 2
   CART SYSTEM
=================================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* CART COUNT */

updateCartCount();


function updateCartCount(){

    const cartCount=document.getElementById("cart-count");

    if(!cartCount){

        return;

    }

    let total=0;

    cart.forEach(item=>{

        total += item.qty;

    });

    cartCount.innerHTML=total;

}



/* OPEN PRODUCT */

function openProduct(id){

    localStorage.setItem(

        "selectedProduct",

        id

    );

    window.location.href="product.html";

}



/* ADD TO CART */

function addToCart(id){

    const product=laptops.find(

        item=>item.id===id

    );

    if(!product){

        return;

    }

    const existing=cart.find(

        item=>item.id===id

    );

    if(existing){

        existing.qty++;

    }

    else{

        cart.push({

            ...product,

            qty:1

        });

    }

    saveCart();

    alert(product.name+" added to cart.");

}



/* BUY NOW */

function buyNow(id){

    addToCart(id);

    window.location.href="cart.html";

}



/* SAVE CART */

function saveCart(){

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    updateCartCount();

}



/* PRODUCT DETAILS PAGE */

const selectedId=

Number(

localStorage.getItem(

"selectedProduct"

)

);

const selectedProduct=

laptops.find(

item=>item.id===selectedId

);

if(selectedProduct){

    const img=document.getElementById("product-image");

    const name=document.getElementById("product-name");

    const rating=document.getElementById("product-rating");

    const price=document.getElementById("product-price");

    if(img) img.src=selectedProduct.image;

    if(name) name.innerHTML=selectedProduct.name;

    if(rating) rating.innerHTML=selectedProduct.rating;

    if(price) price.innerHTML="₹"+selectedProduct.price;

    const cartBtn=document.getElementById("add-cart-btn");

    if(cartBtn){

        cartBtn.onclick=function(){

            addToCart(selectedProduct.id);

        };

    }

    const buyBtn=document.getElementById("buy-now-btn");

    if(buyBtn){

        buyBtn.onclick=function(){

            buyNow(selectedProduct.id);

        };

    }

}
/* ===================================
   LAPTOP STORE
   PART 3
   CART PAGE
=================================== */

const cartItems=document.getElementById("cart-items");

if(cartItems){

    loadCart();

}


function loadCart(){

    cartItems.innerHTML="";

    if(cart.length===0){

        cartItems.innerHTML=`

        <div class="empty-cart">

            <h2>Your Cart is Empty 🛒</h2>

            <br>

            <a href="index.html"
            class="shop-btn">

                Continue Shopping

            </a>

        </div>

        `;

        const total=document.getElementById("total-price");

        if(total){

            total.innerHTML="₹0";

        }

        return;

    }


    let totalAmount=0;

    cart.forEach((item,index)=>{

        totalAmount += item.price * item.qty;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img
            src="${item.image}"
            alt="${item.name}">

            <div class="cart-info">

                <h3>

                    ${item.name}

                </h3>

                <p>

                    ${item.brand}

                </p>

                <div class="rating">

                    ${item.rating}

                </div>

                <h2>

                    ₹${item.price}

                </h2>

                <div class="qty-box">

                    <button
                    onclick="decreaseQty(${index})">

                        -

                    </button>

                    <span>

                        ${item.qty}

                    </span>

                    <button
                    onclick="increaseQty(${index})">

                        +

                    </button>

                </div>

                <br>

                <button
                class="buy-btn"
                onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });


    const total=document.getElementById("total-price");

    if(total){

        total.innerHTML="₹"+totalAmount;

    }

}



/* ==========================
   QUANTITY +
========================== */

function increaseQty(index){

    cart[index].qty++;

    saveCart();

    loadCart();

}



/* ==========================
   QUANTITY -
========================== */

function decreaseQty(index){

    if(cart[index].qty>1){

        cart[index].qty--;

    }

    else{

        cart.splice(index,1);

    }

    saveCart();

    loadCart();

}



/* REMOVE */

function removeItem(index){

    cart.splice(index,1);

    saveCart();

    loadCart();

}
/* ===================================
   LAPTOP STORE
   PART 4
   WISHLIST
=================================== */

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

updateWishlistCount();

function updateWishlistCount(){

    const count=document.getElementById("wishlist-count");

    if(count){

        count.innerHTML=wishlist.length;

    }

}

function addToWishlist(id){

    const product=laptops.find(item=>item.id===id);

    if(!product){

        return;

    }

    const exists=wishlist.find(item=>item.id===id);

    if(exists){

        alert("Already added to Wishlist ❤️");

        return;

    }

    wishlist.push(product);

    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );

    updateWishlistCount();

    alert("Added to Wishlist ❤️");

}



/* ===================================
   ORDER SUCCESS
=================================== */

function confirmOrder(){

    if(cart.length===0){

        alert("Your cart is empty!");

        return;

    }

    const popup=document.getElementById("success-popup");

    if(popup){

        popup.classList.add("active");

    }

    const orderId="LS"+Math.floor(Math.random()*900000+100000);

    const order=document.getElementById("order-number");

    if(order){

        order.innerHTML=orderId;

    }

    localStorage.setItem(

        "lastOrder",

        JSON.stringify({

            orderId:orderId,

            items:cart,

            date:new Date().toLocaleString()

        })

    );

    setTimeout(()=>{

        cart=[];

        localStorage.removeItem("cart");

        updateCartCount();

        window.location.href="index.html";

    },3000);

}



function closeSuccess(){

    cart=[];

    localStorage.removeItem("cart");

    updateCartCount();

    window.location.href="index.html";

}
/* ===================================
   LAPTOP STORE
   PART 5
   SEARCH & FINAL
=================================== */
/* ===================================
   LAPTOP STORE
   PART 5
   SEARCH & FINAL
=================================== */

const searchBox = document.querySelector(".search-box input");
const searchSuggestions = document.getElementById("search-suggestions");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const value = this.value.trim().toLowerCase();

        /* EMPTY SEARCH */
        if (value === "") {

            if (searchSuggestions) {
                searchSuggestions.innerHTML = "";
                searchSuggestions.style.display = "none";
            }

            if (productContainer) {
                displayProducts(laptops.slice(0, 5));
            }

            return;
        }

        /* FIND PRODUCTS */
        const result = laptops.filter(product =>
            product.name.toLowerCase().includes(value) ||
            product.brand.toLowerCase().includes(value)
        );

        /* MAIN PRODUCT LIST */
        if (productContainer) {
            displayProducts(result);
        }

        /* CLEAR OLD SUGGESTIONS */
        if (!searchSuggestions) return;

        searchSuggestions.innerHTML = "";

        /* NO RESULT */
        if (result.length === 0) {

            searchSuggestions.innerHTML = `
                <div class="no-result">
                    😕 No Laptop Found
                </div>
            `;

            searchSuggestions.style.display = "block";

            return;
        }

        /* SHOW FIRST 5 PRODUCTS */
        result.slice(0, 5).forEach(product => {

            const item = document.createElement("div");

            item.className = "search-suggestion";

            item.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="suggestion-info">

                    <div class="suggestion-name">
                        ${product.name}
                    </div>

                    <div class="suggestion-brand">
                        ${product.brand}
                    </div>

                    <div class="suggestion-price">
                        ₹${product.price}
                    </div>

                </div>

            `;

            /* CLICK ON PRODUCT */

            item.addEventListener("click", function () {

                openProduct(product.id);

            });

            searchSuggestions.appendChild(item);

        });

        searchSuggestions.style.display = "block";

    });


    /* ENTER KEY */

    searchBox.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            const value = this.value.trim().toLowerCase();

            const result = laptops.filter(product =>
                product.name.toLowerCase().includes(value) ||
                product.brand.toLowerCase().includes(value)
            );

            if (result.length > 0) {
                openProduct(result[0].id);
            }

        }

    });

}


/* CLICK OUTSIDE SEARCH */

document.addEventListener("click", function (event) {

    if (!event.target.closest(".search-box")) {

        if (searchSuggestions) {
            searchSuggestions.style.display = "none";
        }

    }

});
/* ===================================
   LAPTOP STORE
   PART 6
   WISHLIST PAGE
=================================== */

const wishlistContainer =
document.getElementById("wishlist-items");

if(wishlistContainer){

    loadWishlist();

}


function loadWishlist(){

    wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlistContainer.innerHTML="";

    if(wishlist.length===0){

        wishlistContainer.innerHTML=`

        <div class="empty-cart">

            <h2>

                Your Wishlist is Empty ❤️

            </h2>

            <br>

            <a
            href="index.html"
            class="shop-btn">

                Continue Shopping

            </a>

        </div>

        `;

        return;

    }


    wishlist.forEach((item,index)=>{

        wishlistContainer.innerHTML += `

        <div class="product-card">

            <img
            src="${item.image}"
            alt="${item.name}">

            <div class="product-info">

                <h3>

                    ${item.name}

                </h3>

                <p>

                    ${item.brand}

                </p>

                <div class="rating">

                    ${item.rating}

                </div>

                <div class="price">

                    ₹${item.price}

                </div>

                <div class="btn-group">

                    <button
                    class="cart-btn"
                    onclick="openProduct(${item.id})">

                        View Details

                    </button>

                    <button
                    class="buy-btn"
                    onclick="moveToCart(${index})">

                        Move To Cart

                    </button>

                    <button
                    class="wishlist-btn"
                    onclick="removeWishlist(${index})">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}



/* REMOVE */

function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );

    updateWishlistCount();

    loadWishlist();

}



/* MOVE TO CART */

function moveToCart(index){

    const product = wishlist[index];

    addToCart(product.id);

    wishlist.splice(index,1);

    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );

    updateWishlistCount();

    loadWishlist();

}