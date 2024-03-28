// Define the fitness_product
const fitness_product = [
  {
      image: "img/fitness/tynor finger cot (large).jpg",
      tag: "Fitness",
      product_name: "TYNOR Finger Cot (Large)",
      description: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('TYNOR Finger Cot (Large)', '\
      <ul>\
      <li><strong>Brand	TYNOR</strong></li>\
      <li>Size	L </li>\
      <li><strong>Specific Uses For Product	Fracture</strong></li>\
      <li.Use for	Finger</li>\
      <li>Age Range (Description)	Adult</li>\
      <li><strong>About this item</strong></li>\
     <li> Provides protective support and immobilization to the finger in case of injury,fracture or burnt</li> \
      </ul>', '$19.99')",
      price: "Price ₹142",
      discount: "₹127.8",
      cart: "addToCart('TYNOR Finger Cot (Large)', '142','127.8', 'img/fitness/tynor finger cot (large).jpg')"
  },
  {
      image: "img/fitness/cotton-crepe-bandage.webp",
      tag: "Fitness",
      product_name: "Leeford Cotton Crepe Bandage ",
      description: `Leeford Cotton Crepe Bandage (10cm x 4m)....`,
      more_details: "showProductDetails('Leeford Cotton Crepe Bandage (10cm x 4m) Pack of 2 Crepe Bandage  (10 cm)', '<ul><li>\
      Leeford Crepe Bandage is a premium Crepe bandage that offers support & protection and is made with a blend of Cotton. Leeford Crepe Bandage is a lightweight bandage that is normally used to offer heat, insulation and support in many medical situations. It is made up of superior quality pharmacopoeia grade fabric. Leeford Crepe Bandage does not obstruct muscular or joint flexibility & conform easily to all body parts, even at difficult areas.</li></ul>', '$24.99')",
      price: "Price ₹170",
      discount: "₹140",
      cart: "addToCart('Leeford Cotton Crepe Bandage (10cm x 4m) Pack of 2 Crepe Bandage  (10 cm)', '170','140', 'img/fitness/cotton-crepe-bandage.webp')"
  },
 
  // Include other fitness products here
];

// Generate product HTML
const fitness_productPerPage = 8;
let currentFitnessPage = 1;

function displayFitnessProducts(page) {
  const startIndex = (page - 1) * fitness_productPerPage;
  const endIndex = startIndex + fitness_productPerPage;
  const fitness_productsToDisplay = fitness_product.slice(startIndex, endIndex);

  const productContainer = document.querySelector('.fitness-product-container');
  productContainer.innerHTML = '';

  fitness_productsToDisplay.forEach((product) => {
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
          <div style="display:flex; gap:5px ">
            <h6 class="text-dark  fw-bold mb-0 text-danger text-decoration-line-through">${product.price}</h6><h6>${product.discount}</h6>
          </div>
          <div>
            <button class="bg btn border border-secondary rounded-pill text-primary" style="white-space: nowrap; font-size: 10px;" onclick="${product.cart}">
              <i class="fa fa-shopping-bag text-primary"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
      `;
  });
}

function displayFitnessPagination() {
  const totalFitnessPages = Math.ceil(fitness_product.length / fitness_productPerPage);
  const paginationContainer = document.querySelector('.fitness-pagination-container');

  let paginationHTML = '';
  for (let i = 1; i <= totalFitnessPages; i++) {
      const isActive = currentFitnessPage === i ? 'active' : '';
      paginationHTML += `<li class="page-item ${isActive}"><a class="page-link" href="#" onclick="changeFitnessPage(${i})">${i}</a></li>`;
  }
  paginationContainer.innerHTML = paginationHTML;
}

function changeFitnessPage(page) {
  currentFitnessPage = page;
  displayFitnessProducts(currentFitnessPage);
  displayFitnessPagination();
}

// Initial display
displayFitnessProducts(currentFitnessPage);
displayFitnessPagination();
