const db='./src/db/data.json'

const containerData = document.getElementById("containerData");

fetch(db)
  .then(response => response.json()) 
  .then(data => {
    const productElements= data.map(product=>{
        const productCart =document.createElement("div");
        productCart.className="productCart";
        productCart.innerHTML = `
        <img src="${product.imagen}" alt="">
        <p>${product.nombre}</p>
        <p>$${product.precio}</p>
        
      `;
      return productCart;
    });
    productElements.forEach(element=>{
        containerData.appendChild(element)
    })

  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
