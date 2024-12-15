let count = 1;
let cart = [];

// Preload images
function preLoad() {
  const images = [
    { id: "a1", src: "../public/purple.jpg" },
    { id: "a2", src: "../public/cyan.png" },
    { id: "a3", src: "../public/blue.png" },
    { id: "a4", src: "../public/black.png" },
  ];

  images.forEach((image) => {
    const img = new Image();
    img.src = image.src;
    window[image.id] = img; // Store the image in the global scope
  });
}

// Update the displayed count
function updateCount() {
  document.getElementById("count").innerHTML = count;
}

// Update the cart count display
function updateCart() {
  document.getElementById("cart-count").innerHTML = cart.length;
}

// Add selected item to the cart
function addToCart() {
  const selectedSize = document.querySelector('input[name="size"]:checked');
  const selectedColor = document.querySelector('input[name="color"]:checked');

  if (!selectedSize || !selectedColor) {
    alert("Please select a size and color.");
    return;
  }

  const product = {
    name: "Classy Modern Smart watch",
    price: calculatePrice(selectedSize.value),
    size: selectedSize.value,
    color: selectedColor.value,
    count: count,
  };

  cart.push(product);
  updateCart();
}

// Calculate price based on selected size
function calculatePrice(size) {
  const sizePrices = {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  };
  return sizePrices[size] + 79; // Base price of $79
}

// Open the checkout popup and display cart items
function openCheckout() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Clear previous items

  cart.forEach((product) => {
    const item = document.createElement("div");
    item.innerHTML = `
      <h1>${product.name}</h1>
      <h1>Price: $${product.price}</h1>
      <h1>Size: ${product.size}</h1>
      <h1>Color: ${product.color}</h1>
      <h1>Count: ${product.count}</h1>
    `;
    cartList.appendChild(item);
  });
}

// Close the checkout popup
function closeCheckout() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Increment the count of items
function incrementCount() {
  count++;
  updateCount();
}

// Decrement the count of items
function decrementCount() {
  if (count > 1) {
    count--;
    updateCount();
  }
}

// Change the displayed image based on selected color
function im(imageId) {
  document.getElementById("a").src = window[imageId].src;
}

// Event listeners for size and color selection
document.addEventListener("DOMContentLoaded", function () {
  const sizeRadios = document.getElementsByName("size");
  const colorRadios = document.getElementsByName("color");

  sizeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Update the price display if needed
    });
  });

  colorRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      const color = this.value;
      const imgId = `a${
        ["purple", "cyan", "blue", "black"].indexOf(color.toLowerCase()) + 1
      }`;
      document.getElementById("a").src = window[imgId].src; // Change the image based on selected color
    });
  });
});

// Preload images on page load
window.onload = preLoad;
