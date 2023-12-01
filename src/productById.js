const db = './src/db/data.json';

const containerProductById = document.getElementById("containerProductById");
const containerSimilarProduct =document.getElementById('containerSimilarProduct')

const url = new URL(window.location);
const id = url.searchParams.get("id");

fetch(db)
  .then(response => response.json())
  .then(data => {
    const product = data.find(element => element.id == id);
    const categorySimilar= product.categoria
    const similaresProducts=data.filter(element=>element.id!=id&&element.categoria==categorySimilar)
    const productCart = document.createElement("div");
    productCart.className = "productById container";
    containerProductById.appendChild(productCart);

    const productImage = document.createElement("img");
    productImage.src = product.imagen;
    productImage.alt = "img";
    productCart.appendChild(productImage);

    const productDescription = document.createElement("div");
    productDescription.className = "productDescriptionById";
    productCart.appendChild(productDescription);

    const titleProduct=document.createElement("h3")
    productDescription.appendChild(titleProduct)
    titleProduct.textContent=`${product.nombre}`

    const priceProduct=document.createElement("p")
    priceProduct.style="margin:15px 0"
    priceProduct.textContent=`$ ${product.precio}`
    productDescription.appendChild(priceProduct)

    const descriptionText = document.createElement("p");
    descriptionText.textContent = product.descripcion;
    productDescription.appendChild(descriptionText);

    similaresProducts.map(element => {
    
     const cartProduct=document.createElement("div")
     cartProduct.className="productCart"

     const productImg=document.createElement("img")
     productImg.src=`${element.imagen}`
     cartProduct.appendChild(productImg)

     containerSimilarProduct.appendChild(cartProduct)
    
    const titleProduct=document.createElement("h3")
    titleProduct.textContent=`${element.nombre}`
    cartProduct.appendChild(titleProduct)

    const priceProduct=document.createElement("p")
    priceProduct.textContent=`$ ${element.precio}`
    cartProduct.appendChild(priceProduct)

    const watchProduct=document.createElement("a")
    watchProduct.style="color:var(--blue)"
    watchProduct.href=`./productsById.html?id=${element.id}`
    watchProduct.textContent="ver producto"
    cartProduct.appendChild(watchProduct)
        
    });
  })
  .catch(error => {
    console.log(error);
  });
