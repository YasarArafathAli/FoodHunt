const form = document.querySelector('#task-form');
const clrBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('.task');
// const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');


loadAllEventListener();


function loadAllEventListener(){
    form.addEventListener("submit", addTask);

    taskList.addEventListener("click", removeTask);

    clrBtn.addEventListener("click", clearTasks);

    filter.addEventListener("keyup", filterTask);
}


function addTask(e){
    if(taskInput.value === '')
    {
        alert("Add a list");
    }
    
    // Create li element
    const li = document.createElement("li");
    //Add a class
    li.className = 'collection-item'; 
    // create a node and append
    li.appendChild(document.createTextNode(taskInput.value));
    // Create a element
    const link = document.createElement("a");
    // add a class
    link.className = 'delete-item secondary-content';
    // add icon
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // append link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);


    taskInput.value = ''; 



    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearTasks(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// function filterTask(e){
//     const text = e.target.value.toLowerCase();

//     document.querySelectorAll(".collection-item").forEach(
//         function(task){
//             const item = task.firstChild.textContent;
//             if(item.toLowerCase().indexOf(text) != -1){
//                 task.style.display = 'block';
//             }
//             else{
//                 task.style.display = 'none';
//             }
//         });
// }