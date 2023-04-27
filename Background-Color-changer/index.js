const container=document.querySelector('.container')
const buttons=document.querySelectorAll('.background-buttons')
const color=['orange','yellow','blue','green']
buttons.forEach((button,index)=>{
  button.addEventListener('click',()=>{
    container.style.backgroundColor=color[index]
    if(color[index]!=='yellow'){
        container.style.color='white'
    }
    else{
        container.style.color='black'
    }
  })
})