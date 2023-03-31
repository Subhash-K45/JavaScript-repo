import {data} from './data.js'
const btn=document.getElementById('btn');
const author=document.getElementById('Author');
const Quote=document.getElementById('Quote');
const Random=(Math.floor(Math.random()*100)).toString()
Quote.innerText=(data[0][Random].text)
author.innerText=(data[0][Random].author)
btn.addEventListener('click',()=>{
    const Random=(Math.floor(Math.random()*100)).toString()
    Quote.innerText=(data[0][Random].text)
    author.innerText=(data[0][Random].author)
})



