const inp = document.getElementById("add_in");
const list = document.getElementById("to_do");
function addTask(){
    if (inp.value === ''){
        alert("you must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inp.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inp.value="";
    savedata();
}
list.addEventListener('click',function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    savedata();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedata();
  }
},false);
function savedata(){
    localStorage.setItem("data", list.innerHTML)
}
function showtask(){
    list.innerHTML=localStorage.getItem("data");
}
showtask();
