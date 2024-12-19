let count = 1;
let cart = [];

// Preload images
function preLoad() {
  const images = [
    { id: "a1", src: "./purple.jpg" },
    { id: "a2", src: "./cyan.png" },
    { id: "a3", src: "./black.png" },
    { id: "a4", src: "./blue.png" },
  ];
  images.forEach((image) => {
    const img = new Image();
    img.src = image.src;
    window[image.id] = img;
  });
}

// Update quantity display
function updateCount() {
  document.getElementById("count").innerText = count;
}

// Increment quantity
function incrementCount() {
  count++;
  updateCount();
}

// Decrement quantity
function decrementCount() {
  if (count > 1) {
    count--;
    updateCount();
  }
}

// Update cart count
function updateCart() {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-count").innerText = `${totalItems}`;
}

// Add to cart
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
    quantity: count,
  };

  // Check if the item already exists in the cart
  const existingItem = cart.find(
    (item) => item.size === product.size && item.color === product.color
  );

  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  updateCart();
}

// Calculate price based on size
function calculatePrice(size) {
  const sizePrices = {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  };
  return sizePrices[size];
}

// Open checkout
function openCheckout() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Clear previous items

  // Add table headers
  const tableHeader = `
    <div class="max-w-[563px] h-[36px] flex pr-[4px] pt-[8px] border-b py-2 text-[14px] leading-[23.1px] text-[#8091A7]">
      <div class="w-[278px] mr-6">Item</div>
      <div class="w-[62px]">Color</div>
      <div class="w-[69px]">Size</div>
      <div class="w-[59px]">Qnt</div>
      <div class="w-[91px] text-right">Price</div>
    </div>
  `;
  cartList.innerHTML = tableHeader;

  let total = 0;
  let totalQuantity = 0;

  cart.forEach((product) => {
    const itemTotal = product.price * product.quantity;
    total += itemTotal;
    totalQuantity += product.quantity;

    const itemRow = `
      <div class="w-[563px] h-[52px] items-center justify-center flex py-2 border-b text-[14px] leading-[23.1px] text-[#364A63]">
        <div class="w-[278px] h-[36px] flex items-center gap-4 mr-6">
          <img src="${getImageSrc(
            product.color
          )}" class="w-9 h-9 rounded" alt="Product" />
          <span>${product.name}</span>
        </div>
        <div class="w-[62px]">${product.color}</div>
        <div class="w-[69px] font-bold">${product.size}</div>
        <div class="w-[59px] font-bold">${product.quantity}</div>
        <div class="w-[91px] font-bold text-right">$${itemTotal.toFixed(
          2
        )}</div>
      </div>
    `;
    cartList.innerHTML += itemRow;
  });

  // Add total price and quantity row
  const totalDiv = `
    <div class="w-[563px] h-[52px] items-center text-[#373737] text-[18px] flex justify-between font-bold text-lg mt-4">
      <div class="w-[379px]">Total </div>
      <div class="w-[9px] mr-7">${totalQuantity}</div>
      <div class="w-[18px] text-right mr-6">$${total.toFixed(2)}</div>
    </div>
  `;
  cartList.innerHTML += totalDiv;
}

// Get image source based on color
function getImageSrc(color) {
  switch (color) {
    case "Purple":
      return "./purple.jpg";
    case "Cyan":
      return "./cyan.png";
    case "Black":
      return "./black.png";
    case "Blue":
      return "./blue.png";
    default:
      return "";
  }
}

// Close checkout
function closeCheckout() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Change image
function im(imageId) {
  document.getElementById("a").src = window[imageId].src;
}
