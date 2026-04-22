let inputBox=document.getElementById("input");
let searchBtn=document.getElementById("button");
let list=document.getElementById("list");

loadData();

searchBtn.addEventListener("click",function(){

  let task=inputBox.value.trim() ;

  if(task==""){
    alert("Enter task");
    return;
  }

   let li=document.createElement("li");
   li.innerHTML=`<input type="checkbox" ><span>${task}</span>
    <span class="delete">✖</span>`;

    li.querySelector(".delete").addEventListener("click",function(){
        li.remove();
        saveData();
    })

    list.appendChild(li);
     saveData();
    inputBox.value="";

});



function saveData(){
  let tasks=[];
  let allTasks=list.querySelectorAll("li span:first-of-type");
  allTasks.forEach(function(item){
    tasks.push(item.innerText);
  });
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

/* Load from LocalStorage */
function loadData() {

    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {

        let tasksArray = JSON.parse(savedTasks);

        tasksArray.forEach(function (task) {
            createTask(task);
        });
    }
  }