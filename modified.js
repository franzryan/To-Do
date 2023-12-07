let inputBox = document.getElementById('input-box')
let progressUl = document.getElementById('inprogress-tasks')
let completedUl = document.getElementById('completed-tasks')


let taskArr = JSON.parse(localStorage.getItem('tasks')) || []

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskArr))
}

window.addEventListener('load', function(){
    creationOfLi(true, taskArr)
})

function creationOfLi() {
    taskArr.forEach(function(value) {
                //create li element
                let createLi = document.createElement('li');
                //create input element for checkbox
                let createInput = document.createElement('input')
                createInput.type = 'checkbox'
                //create label for the li element (cannot display text if without label and assign input to label content)
                let label = document.createElement('label')
                label.textContent = value
                //append checkbox
                createLi.appendChild(createInput)
                //append label
                createLi.appendChild(label)
                //append li 
                progressUl.appendChild(createLi)
                //eventlistener for checkbox
                createInput.addEventListener('change', function() {
                    if (createInput.checked) {
                        // Move the li element to the completed tasks container
                        completedUl.appendChild(createLi);
                    } else {
                        // Move the li element back to the in-progress tasks container
                        progressUl.appendChild(createLi);
                    }
                });
                //create trashbin for deleting tasks
                
            })
}

function addTask(fromPageLoad) {
    if (inputBox.value === '' && !fromPageLoad) {
        alert('please enter a task')
    } else {
        //add the input value to task array
        taskArr.push(inputBox.value)
        progressUl.innerHTML = '';
        creationOfLi()
        inputBox.value = ""
        saveToLocalStorage()
}
}

