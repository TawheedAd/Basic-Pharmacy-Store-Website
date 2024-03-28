// Define the medicine_product
const medicine_product = [
  {
      image: "img/medicine/limce.jpg",
      tag: "Medicine",
      product_name: "Limcee - Strip of 15 Tablets",
      discription: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('Evion LC - Strip of 10 Tablets', '<ul><li><strong>Product Dimensions:</strong> 10 x 7 x 0.5 cm; 15 Grams</li><li><strong>Date First Available:</strong> 4 May 2020</li><li><strong>Manufacturer:</strong> Abbott Healthcare Pvt. Ltd.</li><li><strong>ASIN:</strong> B0882DBXPG</li><li><strong>Item part number:</strong> B0882DBXPG</li><li><strong>Country of Origin:</strong> India</li><li><strong>Packer:</strong> Abbott Healthcare Pvt. Ltd.</li><li><strong>Item Weight:</strong> 15 g</li><li><strong>Item Dimensions LxWxH:</strong> 10 x 7 x 0.5 Centimeters</li><li><strong>Net Quantity:</strong> 15.00 Count</li><li><strong>Included Components:</strong> Tablets</li><li><strong>Generic Name:</strong> Tablets</li></ul>', '$4.99 / kg')",
      price: "₹24.86",
      discount: "₹22.37",
      
      cart: "addToCart('Limcee - Strip of 15 Tablets', 24.86, 22.37, 'img/medicine/limce.jpg')"

  },
  {
      image: "img/medicine/evion.jpg",
      tag: "Medicine",
      product_name: "Evion LC - Strip of 10 Tablets",
      discription: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('Evion LC - Strip of 10 Tablets', '<ul><li><strong>Product Dimensions:</strong> 10 x 7 x 0.5 cm; 15 Grams</li><li><strong>Date First Available:</strong> 4 May 2020</li><li><strong>Manufacturer:</strong> Abbott Healthcare Pvt. Ltd.</li><li><strong>ASIN:</strong> B0882DBXPG</li><li><strong>Item part number:</strong> B0882DBXPG</li><li><strong>Country of Origin:</strong> India</li><li><strong>Packer:</strong> Abbott Healthcare Pvt. Ltd.</li><li><strong>Item Weight:</strong> 15 g</li><li><strong>Item Dimensions LxWxH:</strong> 10 x 7 x 0.5 Centimeters</li><li><strong>Net Quantity:</strong> 15.00 Count</li><li><strong>Included Components:</strong> Tablets</li><li><strong>Generic Name:</strong> Tablets</li></ul>', '$4.99 / kg')",
      price: "Price ₹56.90",
      discount: "₹22.37",
      cart: "addToCart('Evion LC - Strip of 10 Tablets', '56.90',51.2, 'img/medicine/evion.jpg')"
  },
  {
      image: "img/medicine/neurobion.jpg",
      tag: "Medicine",
      product_name: "Neurobion Forte - Strip of 30 Tablets",
      discription: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('Neurobion Forte - Strip of 30 Tablets', '<ul><li><strong>Product Dimensions:</strong> 10 x 7 x 0.5 cm; 15 Grams</li><li><strong>Date First Available:</strong> 4 May 2020</li><li><strong>Manufacturer:</strong> Abbott Healthcare Pvt. Ltd.</li><li><strong>ASIN:</strong> B0882DBXPG</li><li><strong>Item part number:</strong> B0882DBXPG</li><li><strong>Country of Origin:</strong> India</li><li><strong>Packer:</strong> Abbott Healthcare Pvt. Ltd.</li><li><strong>Item Weight:</strong> 15 g</li><li><strong>Item Dimensions LxWxH:</strong> 10 x 7 x 0.5 Centimeters</li><li><strong>Net Quantity:</strong> 15.00 Count</li><li><strong>Included Components:</strong> Tablets</li><li><strong>Generic Name:</strong> Tablets</li></ul>', '$4.99 / kg')",
      price: "Price ₹38.10",
      discount: "₹34.2",
      cart:  "addToCart('Neurobion Forte - Strip of 30 Tablets', '38.10','34.2', 'img/medicine/neurobion.jpg')"
  },
  {
      image: "img/medicine/unienzyme.jpg",
      tag: "Medicine",
      product_name: "Unienzyme - Strip of 15 Tablets",
      discription: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('Unienzyme - Strip of 15 Tablets', '<ul><li><strong>Product Dimensions:</strong> 10 x 7 x 0.5 cm; 15 Grams</li><li><strong>Date First Available:</strong> 4 May 2020</li><li><strong>Manufacturer:</strong> Abbott Healthcare Pvt. Ltd.</li><li><strong>ASIN:</strong> B0882DBXPG</li><li><strong>Item part number:</strong> B0882DBXPG</li><li><strong>Country of Origin:</strong> India</li><li><strong>Packer:</strong> Abbott Healthcare Pvt. Ltd.</li><li><strong>Item Weight:</strong> 15 g</li><li><strong>Item Dimensions LxWxH:</strong> 10 x 7 x 0.5 Centimeters</li><li><strong>Net Quantity:</strong> 15.00 Count</li><li><strong>Included Components:</strong> Tablets</li><li><strong>Generic Name:</strong> Tablets</li></ul>', '$4.99 / kg')",
      price: "Price ₹77.55",
      discount: "₹69.79",
      cart: "addToCart('Unienzyme - Strip of 15 Tablets', '77.55','69.79','img/medicine/unienzyme.jpg')"
  },
  {
      image: "img/medicine/clobetamilg.jpg",
      tag: "Medicine",
      product_name: "Clobetamil G - Tube of 30g Cream",
      discription: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('Clobetamil G - Tube of 30g Cream', '<ul>\
      <li><strong>Product Dimensions:</strong> 14 x 4 x 2 cm; 30 Grams</li>\
      <li><strong>Date First Available:</strong> 18 August 2022</li>\
      <li><strong>Manufacturer:</strong> Merck Ltd</li>\
      <li><strong>ASIN:</strong> B0BB2SN3HP</li>\
      <li><strong>Item part number:</strong> ED000169783</li>\
      <li><strong>Country of Origin:</strong> India</li>\
      <li><strong>Packer:</strong> Merck Ltd</li>\
      <li><strong>Importer:</strong> Merck Ltd</li>\
      <li><strong>Item Weight:</strong> 30 g</li>\
      <li><strong>Item Dimensions LxWxH:</strong> 14 x 4 x 2 Centimeters</li>\
      <li><strong>Net Quantity:</strong> 1.00 Count</li>\
      <li><strong>Included Components:</strong> Cream</li>\
      <li><strong>Generic Name:</strong> Cream</li>\
  </ul>', '$4.99 / kg')",
  price: "Price ₹40.70",
  discount: "₹36.6",
      cart: "addToCart('Clobetamil G - Tube of 30g Cream', '40.70','36.6', 'img/medicine/clobetamilg.jpg')"
  },
  {
      image: "img/medicine/Tretinoin-gel.jpg",
      tag: "Medicine",
      product_name: "A-RET GEL 0.025% - Tube of 20 gm Gel",
      discription: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('A-RET GEL 0.025% - Tube of 20 gm Gel', '<ul>\
      <li><strong>Product Dimensions:</strong> 2.2 x 2.2 x 2.2 cm; 20 Grams</li>\
      <li><strong>Date First Available:</strong> 28 February 2022</li>\
      <li><strong>Manufacturer:</strong> MENARINI INDIA LTD</li>\
      <li><strong>ASIN:</strong> B09TLHSDXK</li>\
      <li><strong>Item model number:</strong> ARE0001</li>\
      <li><strong>Country of Origin:</strong> India</li>\
      <li><strong>Manufacturer:</strong> MENARINI INDIA LTD, c3 puja house, milan complex, karampura, new delhi, delhi 110015.</li>\
      <li><strong>Packer:</strong> MENARINI INDIA LTD</li>\
      <li><strong>Importer:</strong> MENARINI INDIA LTD</li>\
      <li><strong>Item Weight:</strong> 20 g</li>\
      <li><strong>Item Dimensions LxWxH:</strong> 22 x 22 x 22 Millimeters</li>\
      <li><strong>Net Quantity:</strong> 1 Count</li>\
      <li><strong>Included Components:</strong> OINTMENT</li>\
      <li><strong>Generic Name:</strong> A-RET GEL 0.025%</li>\
  </ul>', '$4.99 / kg')",
  price: "Price ₹120",
  discount: "₹108",
      cart: "addToCart('A-RET GEL 0.025% - Tube of 20 gm Gel', '120','108', 'img/medicine/Tretinoin-gel.jpg')"
  },
  {
      image: "img/medicine/cipladine.jpg",
      tag: "Medicine",
      product_name: "CIPLADINE OINTMENT 125GM",
      discription: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('CIPLADINE OINTMENT 125GM', '<ul>\
      <li><strong>Product Dimensions:</strong> 14 x 4 x 2 cm; 1 Grams</li>\
      <li><strong>Date First Available:</strong> 19 March 2020</li>\
      <li><strong>Manufacturer:</strong> Cipla Ltd.</li>\
      <li><strong>ASIN:</strong> B0864ML574</li>\
      <li><strong>Item part number:</strong> B0864ML574</li>\
      <li><strong>Country of Origin:</strong> India</li>\
      <li><strong>Manufacturer:</strong> Cipla Ltd.</li>\
      <li><strong>Item Weight:</strong> 1 g</li>\
      <li><strong>Item Dimensions LxWxH:</strong> 14 x 4 x 2 Centimeters</li>\
      <li><strong>Net Quantity:</strong> 1.0 gram</li>\
  </ul>', '$4.99 / kg')",
  price: "Price ₹59",
  discount: "₹53.1",
      cart: "addToCart('CIPLADINE OINTMENT 125GM', '59','53.1', 'img/medicine/cipladine.jpg')"
  },
  {
      image: "img/medicine/paracetamol-fast.jpg",
      tag: "Medicine",
      product_name: "Crocin Advance - Strip of 20 Tablets",
      discription: `Product Dimensions: 10 x 7 x 0.5 cm; 15 Grams
          Date First Available: 4 May 2020....`,
      more_details: "showProductDetails('Crocin Advance - Strip of 20 Tablets', '<ul>\
      <li><strong>Product Dimensions:</strong> 2.2 x 2.2 x 2.2 cm; 20 Grams</li>\
      <li><strong>Date First Available:</strong> 8 March 2022</li>\
      <li><strong>Manufacturer:</strong> Glaxo Smithkline Pharmaceuticals Ltd</li>\
      <li><strong>ASIN:</strong> B09V3T5ZVC</li>\
      <li><strong>Item model number:</strong> CRO0091</li>\
      <li><strong>Country of Origin:</strong> India</li>\
      <li><strong>Manufacturer:</strong> Glaxo Smithkline Pharmaceuticals Ltd, 24-25 Floor, One Horizon Center Golf Course Road, DLF Phase 5 Gurgaon 122002, India</li>\
      <li><strong>Packer:</strong> Glaxo Smithkline Pharmaceuticals Ltd</li>\
      <li><strong>Item Weight:</strong> 20 g</li>\
      <li><strong>Item Dimensions LxWxH:</strong> 22 x 22 x 22 Millimeters</li>\
      <li><strong>Net Quantity:</strong> 20 Count</li>\
      <li><strong>Included Components:</strong> TABLET</li>\
      <li><strong>Generic Name:</strong> Crocin Advance</li>\
  </ul>', '$4.99 / kg')",
  price: "Price ₹17.92",
  discount: "₹16.1",
      cart: "addToCart('Crocin Advance - Strip of 20 Tablets', '₹70', 'img/medicine/paracetamol-fast.jpg')"
  },


  

];

// Generate product HTML

const medicine_productPerPage = 8;
let currentPage = 1;

function displaymedicine_product(page) {
  const startIndex = (page - 1) * medicine_productPerPage;
  const endIndex = startIndex + medicine_productPerPage;
  const medicine_productToDisplay = medicine_product.slice(startIndex, endIndex);

  const productContainer = document.querySelector('.medicine-product-container');
  productContainer.innerHTML = '';

  medicine_productToDisplay.forEach((product) => {
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

function displayPagination() {
  const totalPages = Math.ceil(medicine_product.length / medicine_productPerPage);
  const paginationContainer = document.querySelector('.pagination'); // Changed class name

  let paginationHTML = '';
  for (let i = 1; i <= totalPages; i++) {
      const isActive = currentPage === i ? 'active' : '';
      paginationHTML += `<li class="page-item ${isActive}"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
  }
  paginationContainer.innerHTML = paginationHTML;
}





function changePage(page) {
  currentPage = page;
  displaymedicine_product(currentPage);
  displayPagination();
}

// Initial display
displaymedicine_product(currentPage);
displayPagination();


