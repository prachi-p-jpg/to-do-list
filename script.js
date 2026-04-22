let inputBox=document.getElementById("input");
let searchBtn=document.getElementById("button");
let list=document.getElementById("list");

searchBtn.addEventListener("click",function(){

  let task=inputBox.value ;

  if(task==""){
    alert("Enter task");
    return;
  }

   let li=document.createElement("li");
   li.innerHTML=`<input type="checkbox" ><span>${task}</span>
    <span class="delete">✖</span>`;

    li.querySelector(".delete").addEventListener("click",function(){
        li.remove();
    })

    list.appendChild(li);

    inputBox.value="";

});

list.addEventListener("click",function(){
  
});