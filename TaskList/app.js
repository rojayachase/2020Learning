//define UI variables
const form = document.querySelector('#task-form'); //ID
const taskList = document.querySelector('.collection'); //class
const clearBtn = document.querySelector('.clear-tasks'); //class
const filter = document.querySelector('#filter'); //ID
const taskInput = document.querySelector('#task'); //ID

//load all event listeners
loadEventListeners();



//Load all event listeners
function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //remove task event
    taskList.addEventListener('click',removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter
    filter.addEventListener('keyup', filterTasks);
}

//Get tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);


    })



}


//Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('task added');
    }


    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';
    e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('task', JSON.stringify(tasks))
}

//remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains
    ('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            //remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }

    }
     
}

//remove from LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });




}
//Clear Tasks
function clearTasks() {
    //taskList.innerHTML = '';

    //faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    //clear from LS
clearTasksFromLocalStorage();
}

//Clear tasks from LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
}





//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}