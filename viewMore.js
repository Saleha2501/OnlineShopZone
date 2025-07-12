document.addEventListener("DOMContentLoaded",()=>{
    let products=JSON.parse(localStorage.getItem("products"))
    let productId=localStorage.getItem("productId")
    let productDetails=document.getElementById("productDetails")
    if(products && productId){
        let selectedProduct=products.find((v)=>{
            return v.id==productId
        })
        console.log(selectedProduct)
        if(selectedProduct){
            productDetails.innerHTML =`
            <div id=up>
                <img id=img src="${selectedProduct.images[0]}">
                <div id =a>
                    <h1 id=title>${selectedProduct.title}</h1><br>
                    <h3 id=brand>Brand: ${selectedProduct.brand}</h3><br>
                    <h3 id=category>Category: ${selectedProduct.category}</h3><br>
                    <h3 id=description>Description: ${selectedProduct.description}</h3>
                    <div><span id="cost"><i class="fa-solid fa-indian-rupee-sign"></i><b> ${ Math.floor(selectedProduct.price)*85.5}</b>
        <span/>
        </div>
                    <button id="addtoCart" >Add to Cart</button>
                    <button id="backtohome" onclick="backToHome()">Back To Home</button>
                </div>
            
            </div>
            <div id=ratingDiv><b> Customer Review </b><hr> 
                    ${selectedProduct.reviews.map((y) => {
                    return `
                    <div id=rating>${'❤'.repeat(Math.round(y.rating))}</div>
                    <p>${y.comment}</p>
                    <p>By <strong>${y.reviewerName}</strong> on <strong>${y.date}</strong><hr></p>
                    `;
                    }).join("")}
            </div>

            `
            document.getElementById("addtoCart").addEventListener("click",()=>{
                addToCart(selectedProduct)
            })
        }
    }else{
        productDetails.innerHTML="<p>Product Details Not Found</p>"
    }
})
function backToHome() {
    window.location.href = "home.html";
}

function addToCart (product){
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product Added Succesfully")
}