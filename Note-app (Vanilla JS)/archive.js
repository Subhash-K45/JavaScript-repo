import {render} from './render.js'
const archive=document.querySelector('.archive');
let archive_array=JSON.parse(localStorage.getItem('notes')) || []
console.log('hello')
archive.addEventListener('click',(e)=>{
    let type=e.target.dataset.type
    let note_id=e.target.id
    switch(type){
        case "delete" :
            console.log(type)
            archive_array=archive_array.filter((element)=>(element.id.toString()!==note_id))
            archive.innerHTML=archive_array
            localStorage.setItem('notes',JSON.stringify(archive_array));
            break
        case "archive":
            archive_array=archive_array.map((element)=> (element.id.toString()===note_id)?{
                ...element,
                isarchived:!element.isarchived
            }:{
                ...element
            })
            archive.innerHTML=render(archive_array.filter(({isarchived})=> isarchived ))
            localStorage.setItem('notes',JSON.stringify(archive_array))
    }
    
})
archive.innerHTML=render(archive_array.filter(({isarchived})=> isarchived ))
