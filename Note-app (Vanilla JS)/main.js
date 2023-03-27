 import {render} from './render.js'
 const title=document.querySelector('.note-title')
 const inputNotes=document.querySelector('.input-note')
 const All_notes=document.querySelector('.Notes')
 const pinned_notes=document.querySelector('.pinned-notes')
 const other_notes=document.querySelector('.other-notes')
 const btn=document.getElementById('btn');
 let notes_Array=JSON.parse(localStorage.getItem('notes')) || []
 All_notes.addEventListener('click',(e)=>{
    let type=e.target.dataset.type
    let note_id=e.target.id
    switch(type){
        case "delete":
        notes_Array=notes_Array.filter((element)=>{return element.id.toString() !== note_id})
        other_notes.innerHTML=render(notes_Array.filter(({isarchived,ispinned}) => !ispinned && !isarchived))
        localStorage.setItem('notes',JSON.stringify(notes_Array))
        //console.log(notes_Array)
    }
})
 btn.addEventListener('click',()=>{
    if(inputNotes.value.length>0 || title.value.length>0){
    notes_Array=[...notes_Array,{
        id:Date.now(),
        title:title.value.trim(),
        notes:inputNotes.value.trim(),
        ispinned:false,
        isarchived:false
    }]
   // console.log(render(notes_Array))
    other_notes.innerHTML=render(notes_Array.filter(({isarchived,ispinned}) => !ispinned && !isarchived))
    localStorage.setItem('notes',JSON.stringify(notes_Array))
    title.value=''
    inputNotes.value=''
}
})
other_notes.innerHTML=render(notes_Array.filter(({isarchived,ispinned}) => !ispinned && !isarchived))