const api = 'https://dummyjson.com/products';
let productsData = [];

async function getDataFromServer() {
   const response = await fetch(api);
   console.log("Status:", response.status);

   const data = await response.json();
   console.log(data);

   productsData = data.products;

   renderProducts(productsData);
}

function renderProducts(products) {
   const info = document.getElementById("info");
   info.innerHTML = '';

   for (const product of products) {
      const productCard = document.createElement('div');
      productCard.classList.add('col-md-2', 'mb-3', 'custom-card');

      productCard.innerHTML = `
         <div class="card border-success">
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
               <h5 class="card-title">${product.title}</h5>
               <p class="card-text">${product.description}</p>
               <p class="card-text">Price: $${product.price}</p>
               <p class="card-text">Rating: ${product.rating}</p>
               <p class="card-text">Brand: ${product.brand}</p>
            </div>
         </div>
      `;

      info.appendChild(productCard);
   }
}

document.getElementById("sortBtn").addEventListener("click", () => {
   productsData.sort((a, b) => a.price - b.price);

   renderProducts(productsData);
});

getDataFromServer();