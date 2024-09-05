document.getElementById('add-button').addEventListener('click', function () {
    const productName = document.getElementById('product-input').value;

    if (productName.trim() !== '') {
        // Create a new container div for the input, edit, and delete button
        const containerDiv = document.createElement('div');
        containerDiv.className = 'item-container'; 

        // Create a new input element
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'items'; 
        newInput.value = productName;
        newInput.readOnly = true; // Initially set input to readonly

        // Create an edit button
        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.innerHTML = '<i class="fas fa-edit"></i>'; 
        editButton.addEventListener('click', function () {
            if (newInput.readOnly) {
                newInput.readOnly = false;  //editable
                newInput.focus();
                editButton.innerHTML = '<i class="fas fa-check"></i>'; 
            } else {
                newInput.readOnly = true; //not editable
                editButton.innerHTML = '<i class="fas fa-edit"></i>'; 
            }
        });

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn'; 
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; 
        deleteButton.addEventListener('click', function () {
            containerDiv.remove(); // Remove the entire container div when clicked
        });


        containerDiv.appendChild(editButton);
        containerDiv.appendChild(newInput);
        containerDiv.appendChild(deleteButton);

        
        document.getElementById('items-container').appendChild(containerDiv);

        // Clear the input field
        document.getElementById('product-input').value = '';
    } else {
        alert('Please enter a product name');
    }
});
