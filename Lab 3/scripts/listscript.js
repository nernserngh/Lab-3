const products = [
    "Apple",
    "Peach",
    "Pear",
    "Plum",
    "Banana",
    "Blueberry",
    "Watermelon",
    "Strawberry",
    "Raspberry",
    "Literally every other fruit",
];
  
const productList = document.getElementById("products-list");
  
for (let i = 0; i < products.length; i++) {
    const listItem = document.createElement("li");
    const productText = document.createTextNode(products[i]);
  
    listItem.appendChild(productText);
    productList.appendChild(listItem);
}
  
function searchProducts(query) {
    const filteredProducts = [];
  
    for (let i = 0; i < products.length; i++) {
      const productName = products[i].toLowerCase();
  
      if (productName.includes(query.toLowerCase())) {
        filteredProducts.push(products[i]);
      }
    }
  
    return filteredProducts;
}
  
const searchField = document.getElementById("search-field");
  
searchField.addEventListener("input", function () {
    const query = searchField.value;
    const filteredProducts = searchProducts(query);
  
    productList.innerHTML = "";
  
    for (let i = 0; i < filteredProducts.length; i++) {
      const listItem = document.createElement("li");
      const productText = document.createTextNode(filteredProducts[i]);
  
      listItem.appendChild(productText);
      productList.appendChild(listItem);
    }
});
  