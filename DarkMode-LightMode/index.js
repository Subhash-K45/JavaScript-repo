document.querySelector('.btn').addEventListener('click',()=>{
   const active= document.querySelector('.main')
   active.classList.toggle('active')
   active.style.color="white" 
  active.classList.contains('active') ?(document.body.style.backgroundColor="rgb(50, 48, 48)"):document.body.style.backgroundColor="white"
  active.classList.contains('active') ? (document.querySelector('.material-symbols-outlined').textContent="light_mode"):
  (document.querySelector('.material-symbols-outlined').innerHTML="dark_mode")
})