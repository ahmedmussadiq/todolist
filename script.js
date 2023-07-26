const input = document.getElementById("input");
const list_contain =document.getElementById("list");
const addButton = document.querySelector(".bt"); // Select the "ADD" button using a CSS selector



function addtask(){
   
    if(input.value==='')
    {
        alert("Input Field cannot be Empty!");
    }
    else{
       let li=document.createElement("li");
        li.innerHTML=input.value;
        list_contain.appendChild(li);
        let span = document.createElement("span")
span.innerHTML=("\u00d7");
li.appendChild(span);

li.scrollIntoView({ behavior: 'smooth', block: 'end' });


    }
    input.value='';
    savedata();

}

list_contain.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();

    }
});



function handleInputKeydown(event) {
    if (event.keyCode === 13) {
      addButton.click(); // Manually trigger the button click
    }
  }
  
  // Add event listener to the input field for "keydown" event
  input.addEventListener("keydown", handleInputKeydown);


function savedata(){
    localStorage.setItem("data",list_contain.innerHTML);
}

function getdata(){
    list_contain.innerHTML=localStorage.getItem("data");
}

getdata();



