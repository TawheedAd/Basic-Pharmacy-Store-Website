function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItemsDiv = document.getElementById("cartItems");
  cartItemsDiv.innerHTML = "";
  let itemCount = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>No items in cart.</p>";
  } else {
    cart.forEach((item, index) => {
      cartItemsDiv.innerHTML += `
      <div class="item container card mb-3 shadow">
      <div class="row no-gutters">
          <div class="col-md-4">
              <img src="${item.imageUrl}" class="card-img img-fluid" alt="${item.name}">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h4 class="card-title">${item.name}</h4>
                  <p class="card-text d-flex justify-content-between">
                      <span class="text-muted" style="text-decoration: line-through;">Price: ₹${item.price}</span>
                      <span class="discount-label bg-success text-light px-2 py-1 rounded">Discount: ₹${item.discount}</span>
                  </p>
                  <div class="row">
                      <div class="col-md-12">
                          <button class="btn btn-success btn-sm px-3" onclick="openForm('${item.name}', '${item.discount}')">Buy Now</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="card-footer bg-white text-muted text-end">
          <button class="btn btn-link p-0 text-danger" onclick="deleteItem(${index})">
              <i class="fas fa-trash me-2"></i>Delete
          </button>
      </div>
  </div>
  

      `;
      itemCount += 1; // Increment item count
    });
  }

  // Update the item count display
  document.getElementById("cartItemCount").innerText = itemCount;
}

// Function to buy items
function buyItems() {
  // Implement your logic to process the purchase, e.g., redirect to checkout page
  alert("Buying items...");
}

// Function to delete item from cart
function deleteItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Remove item from array
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  displayCartItems(); // Refresh cart display
}

// Display cart items when the page loads
displayCartItems();
