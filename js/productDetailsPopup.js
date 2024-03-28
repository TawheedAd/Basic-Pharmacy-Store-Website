
// Function to show product details in the modal
function showProductDetails(name, description) {
    let productDetailsDiv = document.getElementById('productDetails');
    productDetailsDiv.innerHTML = `
        <h4>${name}</h4>
        <p>${description}</p>
    
    `;
    $('#productModal').modal('show'); // Show the modal
}
