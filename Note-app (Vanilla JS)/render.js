export function render (notes_array){
   let new_array=notes_array.map(({ id,title,notes, ispinned,isarchived})=>{
    // console.log(id,title,notes, ispinned,isarchived)
    return (
        `<div class="new-note">
            <h3 class="new-title">${title}</h3>
            <h5 class="new_note">${notes}</h5>
            <button class="delete-btn" data-type="delete" id=${id}><span class="material-symbols-outlined" data-type="delete" id=${id}>delete</span></button>
            <button class="pin-btn" data-type="pin" id=${id}><span class="material-symbols-outlined" data-type="pin" id=${id}>push_pin</span></button>
            <button class="archive-btn" data-type="archive" id=${id}><span class="material-symbols-outlined" data-type="archive" id=${id}>archive</span></button>
        </div>`
    )
   })
   return new_array.join('')
}