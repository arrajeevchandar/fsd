let productlist=[]
let currentPage=1
let itemsPerPage=5


const fetchproducts=document.getElementById('#fetchproducts')
let mainContainer=document.querySelector('#product-container')
let paginationcontainer=document.querySelector('#pagination-container')
let searchingInput=document.querySelector('#search')
let sortingItem=document.querySelector('#sorting')


fetchproductss.addEventListener('click',async()=>{
await fetch('https://fakestoreapi.com/products')
.then((response)=>response.json())
.then((data)=>productlist=data)
.catch((error)=>console.error(error))
displayprod()
})




function displayprod(){
    mainContainer.innerHTML=""

   // Filter products based on search input
  let filteredprod = productlist.filter(product =>
    product.title.toLowerCase().includes(searchingInput.value.toLowerCase())
  );
if(sortingItem.value=='asc'){
    filteredprod.sort((a, b)=>a.price.localeCompare(b.price))
}
else{
    filteredprod.sort((a, b) => b.price.localeCompare(a.price));
}

searchingInput.addEventListener('input',()=>{
    
    displayprod()
})

sortingItem.addEventListener('change',()=>{
    displayprod()
})

let paginatedprods=filteredprod.slice((currentPage-1)*itemsPerPage,(currentPage*itemsPerPage))

for(let i=0;i<paginatedprods.length;i++){
    let prodimg=document.createElement('img')
    prodimg.src=paginatedprods[i].image
    prodimg.height=100
    prodimg.width=100

    let title=document.createElement('div')
    title.textContent=paginatedprods[i].title

    let description=document.createElement('div')
    description.textContent=paginatedprods[i].description

    let container=document.createElement('div')
    container.appendChild(prodimg)
    container.appendChild(title)
    container.appendChild(description)
    mainContainer.appendChild(container)
}
}
displayprod()





