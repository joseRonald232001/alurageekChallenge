const db='./src/db/data.json'

const containerfirtsProducts = document.getElementById("firtsProducts");
const containerSecondProducts= document.getElementById("secondProducts");
const containerThirdProducts= document.getElementById("thirdProducts");

fetch(db)
  .then(response => response.json()) 
  .then(data => {
    const firtsProducts=data.filter((product)=>product.categoria =="Star wars");
    const secondProducts=data.filter((product)=>product.categoria =="Consolas");
    const thirdProducts=data.filter((product)=>product.categoria =="Diversos");
   
    const firstElements= firtsProducts.map(product=>{
        const productCart =document.createElement("div");
        productCart.className="productCart";
        productCart.innerHTML = `
        <img src="${product.imagen}" alt="">
        <p>${product.nombre}</p>
        <p>$${product.precio}</p>
        <a href="./productsById.html?id=${product.id}" style="color:var(--blue);">ver producto</a>`;
      return productCart;
    });
    const secondElements=secondProducts.map(product=>{
        const productCart =document.createElement("div");
        productCart.className="productCart";
        productCart.innerHTML = `
        <img src="${product.imagen}" alt="">
        <p>${product.nombre}</p>
        <p>$${product.precio}</p>
        <a href="./productsById.html?id=${product.id}" style="color:var(--blue);">ver producto</a>`;

      return productCart;
    });
    const thirdElements=thirdProducts.map(product=>{
        const productCart =document.createElement("div");
        productCart.className="productCart";
        productCart.innerHTML = `
        <img src="${product.imagen}" alt="">
        <p>${product.nombre}</p>
        <p>$${product.precio}</p>
        <a href="./productsById.html?id=${product.id}" style="color:var(--blue);">ver producto</a>`;

      return productCart;
    });

 firstElements.forEach(element => {
  containerfirtsProducts.appendChild(element)
});
secondElements.forEach(element=>{
  containerSecondProducts.appendChild(element)
})
thirdElements.forEach(element=>{
  containerThirdProducts.appendChild(element)
})

 })
  .catch(error => {
    console.error(error);
  });
