document.addEventListener("DOMContentLoaded",()=>{
    displayProduct();

})

function displayProduct(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    let totalAmount=0;
    cartContent.innerHTML = "";

    if(cart.length==0){
        cartContent.innerHTML="<p>Your Cart is Empty,Start Shopping</p>";
        totalPrice.innerHTML="";
    }

    cart.map((product,index)=>{
        totalAmount=product.price *85;
        
        let productElem=document.createElement("div")
        productElem.setAttribute("class","product-info");
        productElem.innerHTML=`
        <div id=main>
        <img src ="${product.images[0]}">
        <div>
        <h3>${product.title}</h3>
        <h3>Price:${product.price}</h3>
        </div>
        <button id="remove" onclick="deleteFromCart(${index})">Remove</button>        
    
        </div>
        `;
        
        cartContent.appendChild(productElem);
    });
    totalPrice.innerHTML=`<h2>Total Amount:${totalAmount}</h2>`

}
function deleteFromCart(index){
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    displayProduct()
}