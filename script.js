//Creating the close button to each list item
let myItemList = document.getElementsByTagName("LI");

for(let i = 0; i < myItemList.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myItemList[i].appendChild(span);
}

//click on the close button to hide the current list item
let close = document.getElementsByClassName("close");

for(let i=0; i< close.length; i++){
    close[i].addEventListener('click',function(){
        let div = this.parentElement;
        div.style.display = "none";
    });
}

//adding a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

//creating a new list item when click on the "add" button
let newElement = document.getElementById("addNewTask");

newElement.addEventListener('click', function (){
    let li = document.createElement("li");
    let inputValue = document.getElementById("addTask").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("You must type a list item!");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("addTask").value = "";

    document.getElementById("addTask").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i<close.length; i++){
        close[i].addEventListener('click', function(){
            let div = this.parentElement;
            div.style.display = "none";
        });
    }
});