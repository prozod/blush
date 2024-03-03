let benefits = document.querySelector(".benefits");
let incrButton = document.querySelector(".increment-quantity");
let decrButton = document.querySelector(".decrement-quantity");
let currentQty = document.getElementById("quantity");
let newQty = parseInt(currentQty.value);

if (currentQty.value > 0 && currentQty.value <= 10) {
  decrButton.addEventListener("click", () => {
    newQty -= 1;
    currentQty.value = newQty;
    let currQtyVal = parseInt(currentQty.value);

    if (currQtyVal <= 1) {
      decrButton.disabled = true;
    }

    if (currQtyVal >= 1) {
      incrButton.disabled = false;
    }
  });

  incrButton.addEventListener("click", () => {
    newQty += 1;
    currentQty.value = newQty;
    let currQtyVal = parseInt(currentQty.value);

    if (currQtyVal >= 10) {
      incrButton.disabled = true;
    }

    if (currQtyVal > 1 && currQtyVal <= 10) {
      decrButton.disabled = false;
    }
  });
}

benefits.addEventListener("click", (e) => {
  if (!e.target.closest("div")) return;
  const items = document.querySelectorAll(".accordion__item");
  const itemContent = e.target.closest(".accordion__item").querySelector(".accordion__content");
  const trigger = e.target.closest("img");

  items.forEach((item) => {
    if (item.querySelector(".accordion__content") === itemContent) {
      item.querySelector(".accordion__content").classList.toggle("show");
    } else {
      item.querySelector(".accordion__content").classList.remove("show");
    }

    let a = item.querySelector(".accordion__content");
    let toggler = a.parentElement.querySelectorAll("img")[0];
    item.querySelector(".accordion__content").classList.contains("show")
      ? toggler.classList.add("rotated")
      : toggler.classList.remove("rotated");
  });
});

let addToCart = document.getElementById("add_cart_cta");
let itemsInCart = document.getElementById("items_in_cart");
let emptyCart = document.getElementById("empty_cart");
let cartItemsWrapper = document.querySelector(".cart__items");

let cartCount = localStorage?.getItem("cartCount") !== null ? localStorage?.getItem("cartCount") : 0;
addToCart.addEventListener("click", () => {
  cartCount += newQty;
  console.log("Added item to cart.", cartCount);
  localStorage?.setItem("cartCount", cartCount);
  cartItemsWrapper.style.opacity = "100%";
  emptyCart.style.cursor = "pointer";
  itemsInCart.textContent = cartCount > 1 ? `${cartCount} items in your cart.` : `${cartCount} item in your cart`;
});

document.addEventListener("DOMContentLoaded", () => {
  if (cartCount == 0) {
    itemsInCart.textContent = "Your cart is empty.";
    cartItemsWrapper.style.opacity = "50%";
    emptyCart.style.cursor = "not-allowed";
  } else {
    itemsInCart.textContent = cartCount > 1 ? `${cartCount} items in your cart.` : `${cartCount} item in your cart`;
  }
});

emptyCart.addEventListener("click", () => {
  localStorage.removeItem("cartCount");
  cartCount = 0;
  itemsInCart.textContent = "Your cart is empty.";
  cartItemsWrapper.style.opacity = "50%";
  emptyCart.style.cursor = "pointer";
});
