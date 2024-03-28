// Define the sexual_wellness_condom_product
const sexual_wellness_condom_product = [
    {
        image: "img/sexual-med/condoms/manforcecondom.jpg",
        tag: "Condoms",
        product_name: "ManFore 1500 Dots Strawberry Flavoured",
        discription: `ManFore 1500 Dots Strawberry Flavoured....`,
        more_details: "showProductDetails('ManFore 1500 Dots Strawberry Flavoured', '<ul></ul>', '$4.99 / kg')",
        price: "Price ₹70",
        cart: "addToCart('Limcee - Strip of 15 Tablets', '₹70', 'img/sexual-med/condoms/manforcecondom.jpg')"
    },
    {
        image: "img/sexual-med/condoms/vigore.webp",
        tag: "Condoms",
        product_name: "Vigore Germed Extra Dotted Condoms Condom",
        discription: `Vigore Germed Extra Dotted Condoms Condom ....`,
        more_details: "showProductDetails('Vigore Germed Extra Dotted Condoms Condom  (Set of 2, 20 Sheets)', '<ul></ul>', '$4.99 / kg')",
        price: "Price ₹70",
        cart: "addToCart('Vigore Germed Extra Dotted Condoms Condom  (Set of 2, 20 Sheets)', '₹70', 'img/sexual-med/condoms/vigore.webp')"
    },
   
];

// Generate product HTML
const sexualWellnessCondomProductPerPage = 8;
let currentSexualWellnessCondomPage = 1;

function displaySexualWellnessCondomProducts(page) {
  const startIndex = (page - 1) * sexualWellnessCondomProductPerPage;
  const endIndex = startIndex + sexualWellnessCondomProductPerPage;
  const sexual_wellness_condom_productsToDisplay = sexual_wellness_condom_product.slice(startIndex, endIndex);

  const productContainer = document.querySelector('.sexual-wellness-condom-product-container');
  productContainer.innerHTML = '';

  sexual_wellness_condom_productsToDisplay.forEach((product) => {
      productContainer.innerHTML += `
      <div class="col-6 col-md-6 col-lg-4 col-xl-3 mb-4">
      <div class="card" style="max-width: 300px;">
          <img src="${product.image}" class="card-img-top img-fluid rounded-top" alt="Product Image" style="object-fit: cover; height: 250px;">
          <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${product.tag}</div>
          <div class="card-body d-flex flex-column justify-content-between">
              <div style="height: 8rem;">
                  <h6 class="product-name mb-0">${product.product_name}</h6>
                  <span class="more-details" onclick="${product.more_details}" style="cursor: pointer; color: #81c408;">More Details</span>
              </div>
              <div class="">
                  <h6 class="text-dark fs-5 fw-bold mb-0">${product.price}</h6>
              </div>
              <div>
                  <button class="btn border border-secondary rounded-pill text-primary" style="white-space: nowrap; font-size: 10px;" onclick="${product.cart}">
                      <i class="fa fa-shopping-bag text-primary"></i> Add to Cart
                  </button>
                  <p class="text-dark fs-6 fw-italic mt-1 mb-0 added-to-cart-message" style="display: none;">Added to Cart!!</p>
              </div>
          </div>
      </div>
  </div>
  
      `;
  });
}

function displaySexualWellnessCondomPagination() {
  const totalSexualWellnessCondomPages = Math.ceil(sexual_wellness_condom_product.length / sexualWellnessCondomProductPerPage);
  const paginationContainer = document.querySelector('.sexual-wellness-condom-pagination-container');

  let paginationHTML = '';
  for (let i = 1; i <= totalSexualWellnessCondomPages; i++) {
      const isActive = currentSexualWellnessCondomPage === i ? 'active' : '';
      paginationHTML += `<li class="page-item ${isActive}"><a class="page-link" href="#" onclick="changeSexualWellnessCondomPage(${i})">${i}</a></li>`;
  }
  paginationContainer.innerHTML = paginationHTML;
}

function changeSexualWellnessCondomPage(page) {
  currentSexualWellnessCondomPage = page;
  displaySexualWellnessCondomProducts(currentSexualWellnessCondomPage);
  displaySexualWellnessCondomPagination();
}

// Initial display
displaySexualWellnessCondomProducts(currentSexualWellnessCondomPage);
displaySexualWellnessCondomPagination();
