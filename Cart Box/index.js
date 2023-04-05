import {products} from './data.js'
const container=document.querySelector('.container')

for(let i in products){
        container.innerHTML=products.map(item=>{
        return(
            `<div class="product">
                <img src="${item.image}" alt="${item.productName}"/>
                <h3 class="product-name">${item.productName}</h3>
                <p>price : ₹${item.price}</p>
                <button class="button" id="${item.id}" data-key="${item.id}">Add to Cart</button>
             </div>`
        )
    }).join(' ')
}
function wrap(item,countArr){
    
    return (
        `<div class="cart-product">
            <div class="cart-product-elements">
                <img src="${products[item].image}" alt="${products[item].productName}"/>
                <h3 class="product-name">${products[item].productName}</h3>
                <p>price : ₹${products[item].price}</p>
                <button class="btn" id="${products[item].id}" data-set="${products[item].id}">Remove</button>
            </div>
            <div class="counter">
                <span class="material-symbols-outlined" data-increment="${countArr[item]}" data-id="${products[item].id}">expand_less</span>
                <span class="counter-elements">${countArr[item]}</span>
                <span class="material-symbols-outlined" data-decrement="${countArr[item]}" data-id="${products[item].id}">expand_more</span>
            </div>
        </div>`
        )
        
}
let arr=[]
let cartArr=[]
let countArr=[]
for(let i=0;i<products.length;i++){
    countArr[i]=1
}
const cartBox=document.querySelector('.cartbox')
container.addEventListener('click',(e)=>{
    const value=(e.target.dataset.key)-1
    if(!arr.includes(value)){ 
    arr.push(value)
    cartArr.push(value)
    }
    else{
        countArr[value]+=1;
    }
    cartBox.innerHTML=arr.map((item,index)=>{
    return (wrap(item,countArr))}).join(' ')
    })
cartBox.addEventListener('click',(e)=>{
     const input_value=(e.target.dataset.set)-1
     const Increment_count=e.target.dataset.increment
     const Decrement_count=e.target.dataset.decrement
     const count=e.target.dataset.id-1
     cartArr=cartArr.filter(value=>input_value!==value)
     arr=arr.filter(value=>input_value!==value)
     countArr[input_value]=1
     cartBox.innerHTML=cartArr.map(item=>{
        return(wrap(item,countArr))
     }).join(' ')
    if(Increment_count){
        countArr[count]+=1
        cartBox.innerHTML=cartArr.map(item=>{
            return(wrap(item,countArr))
         }).join(' ')
    }
    else if(Decrement_count){
        if(countArr[count]>1){
            countArr[count]-=1
            cartBox.innerHTML=cartArr.map(item=>{
                return(wrap(item,countArr))
             }).join(' ')
        }
    }
 })

