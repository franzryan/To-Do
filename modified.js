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
                let createLi = document.createElement('li');
                let createInput = document.createElement('input')
                createInput.type = 'checkbox'
                let label = document.createElement('label')
                label.textContent = value
                let deleteBtn = document.createElement('button')
                deleteBtn.textContent = "Delete"
                deleteBtn.style.color = 
                createLi.appendChild(createInput)
                createLi.appendChild(label)
                progressUl.appendChild(createLi)
                createLi.appendChild(deleteBtn)
                createInput.addEventListener('change', function() {
                    if (createInput.checked) {
                        // Move the li element to the completed tasks container
                        completedUl.appendChild(createLi);
                    } else {
                        // Move the li element back to the in-progress tasks container
                        progressUl.appendChild(createLi);
                    }
                });
                deleteBtn.addEventListener('click', () => {
                    console.log(label.textContent)
                    taskArr.forEach(function(item) {
                        if (label.textContent == item) {
                            let itemIndex = taskArr.indexOf(item)
                            taskArr.splice(itemIndex, 1)
                            console.log(taskArr)
                            createLi.remove()
                        }
                    })
                })
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
