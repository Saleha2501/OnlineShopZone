let products=[];
function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        products=val.products;
        console.log(products);
        localStorage.setItem("products",JSON.stringify(products))
        fetchproduct(products)
    })

}

function fetchproduct(product){
    console.log("fetchproduct",product)
    let output="";
    product.map((v)=>{
        let price=Math.ceil(v.price *80);
        let rate=Math.round(v.rating);

        output +=`<main>
        <div><img src="${v.images[0]}"/></div>
        <h2>${v.title}</h2>
        <div><span id="cost"><i class="fa-solid fa-indian-rupee-sign"></i><b> ${ Math.floor(v.price)*85.5}</b>
        <span/>
        </div>
        
        <div id=star>${"⭐".repeat(Math.round(v.rating))}</div>
        
        <button id="view" onclick="viewMore(${v.id})"><strong>View More</strong></button>
        </main>
        `
    });
    document.getElementById("containerBox").innerHTML=output;
}
document.getElementById("searchProduct")
.addEventListener("input",function searchItems(event){
    let searchTerm=event.target.value.toLowerCase()
    let filteredProduct=products.filter((v)=>{
        return(
            v.title.toLowerCase().includes(searchTerm) ||
            v.category.toLowerCase().includes(searchTerm)
    )
    })
    fetchproduct(filteredProduct)
})


function viewMore(productId){
    // console.log(productId)
    localStorage.setItem("productId",productId)
    window.location.href="./viewMore.html"
    console.log(productId)
}



fetchData();

