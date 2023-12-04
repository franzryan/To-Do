let inputBox = document.getElementById('input-box')
let progressUl = document.getElementById('inprogress-tasks')
let completedUl = document.getElementById('completed-tasks')


let taskArr = JSON.parse(localStorage.getItem('tasks')) || []

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskArr))
}

function addTask() {
    if (inputBox == '') {
        alert('please enter a task')
    } else {
    //add the input value to task array
    taskArr.push(inputBox.value)
    progressUl.innerHTML = '';
    //iterate the task array and set an li element per index
    taskArr.forEach(function(value) {
        let createLi = document.createElement('li');
        let createInput = document.createElement('input')
        createInput.type = 'checkbox'
        let label = document.createElement('label')
        label.textContent = value
        createLi.appendChild(createInput)
        createLi.appendChild(label)
        progressUl.appendChild(createLi)
        createInput.addEventListener('change', function() {
            if (createInput.checked) {
                // Move the li element to the completed tasks container
                completedUl.appendChild(createLi);
            } else {
                // Move the li element back to the in-progress tasks container
                progressUl.appendChild(createLi);
            }
        });
    })
    //empty the input box
    inputBox.value = ""
    saveToLocalStorage()
}}

