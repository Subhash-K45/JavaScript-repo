import {data} from './data.js'
const Container=document.querySelector('.root')
let para=[true,true,true,true]
function wrap(item,para){
  //  console.log(para[0])
   return (
        `<div class="parent">
            <img src= ${item.img} alt=${item.name}/>
            <h4>${item.name}</h4>
            <p>price : ${item.rate}</p>
            <div class="flex"><p class="info" data-key="${item.name}">${para[item.id-1]?(item.info).substring(0,350)+"..." :item.info}</p><button class='btn' data-btn="${item.id}">${para[item.id-1]===true ? 'ShowMore' : 'ShowLess'}</button></div>
            </div>
        `)
}
Container.innerHTML=data.map(item=>{
  return  wrap(item,para)
}).join(' ')
const Parent=document.querySelectorAll('.parent')
Parent[Parent.length-1].children[0].style.height='600px'
Container.addEventListener('click',(e)=>{
    const id=e.target.dataset.btn
    if(e.target.dataset.btn){
       Container.innerHTML=data.map(item=>{
             if(id ===item.id.toString()){
                para[id-1] = !(para[id-1])
               console.log(para[id-1],id)
            }
            else{
                 
            }
           console.log(para)
            return wrap(item,para)
          }).join(' ')
    }
}
)