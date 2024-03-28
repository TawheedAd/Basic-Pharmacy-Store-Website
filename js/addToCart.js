function addToCart(itemName, itemPrice, discount, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Convert itemPrice and discount to strings if they are not already
    itemPrice = typeof itemPrice === 'string' ? itemPrice : itemPrice.toString();
    discount = typeof discount === 'string' ? discount : discount.toString();

    let numericPrice = parseFloat(itemPrice.replace(/[^\d.]/g, ''));
    let numericDiscount = parseFloat(discount.replace(/[^\d.]/g, ''));

    let item = {
        name: itemName,
        price: numericPrice,
        discount: numericDiscount,
        imageUrl: imageUrl,
    };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showAddedToCartMessage();
}


// Function to update cart count in navbar

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemCountElements = document.querySelectorAll('.cartItemCount');
    cartItemCountElements.forEach(element => {
        element.innerText = cart.length;
    });
}


// Call updateCartCount when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});


//   function clearLocalStorage() {
//     localStorage.clear();
//     updateCartCount();

// }


// window.onload = clearLocalStorage;
// Function to display "Item added successfully" popup
function showAddedToCartMessage() {
    // Create a div element for the popup
    const popup = document.createElement('div');
    popup.classList.add('added-to-cart-popup');

    // Create an icon element
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-check-circle');
    icon.style.marginRight = '10px';

    // Create a text node for the message
    const message = document.createTextNode('Item added successfully');

    // Append the icon and message to the popup
    popup.appendChild(icon);
    popup.appendChild(message);

    // Style the popup
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.background = '#4CAF50';
    popup.style.color = '#fff';
    popup.style.padding = '15px 30px';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    popup.style.fontFamily = 'Arial, sans-serif';
    popup.style.fontSize = '16px';
    popup.style.textAlign = 'center';
    popup.style.zIndex = '9999';

    // Append the popup to the body
    document.body.appendChild(popup);

    // Remove the popup after 2 seconds
    setTimeout(() => {
        popup.remove();
    }, 2000);
}
