let inputBox = document.getElementById('input-box')
let progressUl = document.getElementById('inprogress-tasks')
let completedUl = document.getElementById('completed-tasks')

function addTask() {
    if (inputBox.value === "") {
        alert('Please Enter a Task')
    } else {
        //create an li element
        let createLi = document.createElement('li');
        //create a checkbox element
        let createInput = document.createElement('input');
        //set input type to checkbox
        createInput.type = 'checkbox';
        //append checkbox element in li element
        createLi.appendChild(createInput);
        // Create a label for the task text
        let label = document.createElement('label');
        label.textContent = inputBox.value;
        // Append the label to the li element
        createLi.appendChild(label);
        //append li element to ul container
        progressUl.appendChild(createLi)
        //set input box to empty

        createInput.addEventListener('change', function() {
            if (createInput.checked) {
                // Move the li element to the completed tasks container
                completedUl.appendChild(createLi);
            } else {
                // Move the li element back to the in-progress tasks container
                progressUl.appendChild(createLi);
            }
        });
    }
}