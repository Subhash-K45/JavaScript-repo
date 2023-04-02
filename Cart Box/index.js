import {products} from './data.js'
const container=document.querySelector('.container')
console.log(container)
for(let i in products){
        container.innerHTML=products.map(item=>{
        return(
            `<div class="product">
                <img src="${item.image}" alt="${item.productName}"/>
                <h3 class="product-name">${item.productName}</h3>
                <p>price : ${item.price}</p>
                <button class="btn" id=${item.id} data-key="${item.id}">Add to Cart</button>
             </div>`
        )
    }).join(' ')
}
let arr=[]
const btn=document.querySelectorAll('.btn');
const cartBox=document.querySelector('.cartbox')
container.addEventListener('click',(e)=>{
    const value=(e.target.dataset.key)-1
    const count=1;
    if(!arr.includes(value)){ 
    arr.push(value)
    }
    else{
    }
   cartBox.innerHTML=arr.map((item,index)=>{
    return (
        `<div class="cart-product">
         <img src="${products[item].image}" alt="${products[item].productName}"/>
         <h3 class="product-name">${products[item].productName}</h3>
         <p>price : ${products[item].price}</p>
         <button class="btn" id=${products[item].id}">Remove</button>
     </div>`
        )
   }).join(' ')
    
})