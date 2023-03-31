import {products} from './data.js'
const input=document.getElementById('input')
const btn=document.getElementById('btn')
const container=document.querySelector('.container')
let arr=[]

for(let i in products){
    const div=document.createElement('div')
    const img=document.createElement('img')
    const name=document.createElement('h3')
    img.setAttribute('src',products[i].image)
    name.textContent=products[i].productName
    name.classList.add("product-name")
    const price=document.createElement('span')
    price.textContent=`Price : ${products[i].price}`
    div.append(img)
    div.append(name)
    div.append(price)
    div.classList.add('product-container')
    container.append(div)
}
btn.addEventListener('click',()=>{
    const product_name=document.querySelectorAll('.product-name')
    const div =document.querySelectorAll('.product-container');
    const input_value=input.value 
    product_name.forEach((item,i)=>{
        if(item.textContent.toLowerCase().includes(input_value.toLowerCase())){
            div[i].classList.remove('hide')
        }
        else{
            div[i].classList.add('hide')
        }
    })
    
})

