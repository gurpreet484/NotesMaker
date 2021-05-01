
let button = document.getElementById('submit');
showNotes();

button.addEventListener('click', function(){
    let title = document.getElementById('title');
    let text  = document.getElementById('text');
    let notes = localStorage.getItem('notes');
    let date = new Date();
    let date1 = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    if(title.value == "" || text.value == ""){
        return
    }
    

    if(notes == null){
        notesText = [];
    }
    else{
        notesText = JSON.parse(notes);
    }
    let notesObj = {
        title: title.value,
        text: text.value,
        date1: date1
    }
    notesText.push(notesObj);
    localStorage.setItem('notes', JSON.stringify(notesText));
    showNotes();

});

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesText = [];
    }
    else{
        notesText = JSON.parse(notes);
    }
    
    let txt = '';
    notesText.forEach(function(element,index) {
        txt += `
        <div class="notes box" contenteditable>
            <p contenteditable="false">Added or Updated on ${element.date1}</p>
            <div class="sticky">
                <button id="${index}" onclick= "del(this.id)">X</button>
                <h1>${element.title}</h1>
            </div>
            <p>${element.text}</p>
        </div>`
    });

    let notesElm = document.getElementById('notes');
    if(notesText.length != 0){
        notesElm.innerHTML = txt;
    }
    else
    {
        notesElm.innerHTML = "Currently you have no note saved.";
    }
}



function del(index){
    console.log('im deleted');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesText = [];
    }
    else{
        notesText = JSON.parse(notes);
    }
    notesText.splice(index, 1);
    
    localStorage.setItem('notes', JSON.stringify(notesText));
    showNotes();
}




// script for popup form 

function showForm() {
    document.getElementById("form").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("form").style.display = "none";
  }