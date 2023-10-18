var input=document.getElementById("inputbox");
var button=document.getElementById("btn");
var lsContainer=document.getElementById("list");


function add(){
    if(input.value === ""){
        alert("enter something");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML=input.value;
        lsContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        save();
        
    }
    input.value=" ";
}

lsContainer.addEventListener("click", function(e){
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
        save();
    }

});

function save(){
    localStorage.setItem("data",lsContainer.innerHTML);
}

function get(){
    lsContainer.innerHTML=localStorage.getItem("data");
}

get();