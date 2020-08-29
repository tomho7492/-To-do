
window.addEventListener('DOMContentLoaded', (event) => {
    var inputField = document.querySelector("input[type = 'text']");
    var toDoUL = document.querySelector("ul");
    var createButton = document.querySelector(".save");
    var form = document.querySelector('#toDoForm')
    deleteButtons = document.querySelectorAll(".delete");
    completeButtons = document.querySelectorAll(".complete");
    editButtons = document.querySelectorAll(".edit");

    //add eventlistener to submit form for each delete button
    deleteButtons.forEach(function(currentBtn){
        currentBtn.addEventListener("click", () => {
            var deleteForm = document.querySelector('form[name="deleteForm"]');
            var deleteInput = document.querySelector('input[name="deleteInput"]');
            var node = null;
            for (var i = 0; i < currentBtn.parentNode.childNodes.length; i++){
                if (currentBtn.parentNode.childNodes[i].className == "toDoText"){
                    node = currentBtn.parentNode.childNodes[i];
                } 
             }
            deleteInput.value = node.textContent;
        
          deleteForm.submit();
    });
 

});

    //add eventlistener to submit form for each complete button
    completeButtons.forEach(function(currentBtn){
        currentBtn.addEventListener("click", () => {
            var completeForm = document.querySelector('form[name="completeForm"]');
            var completeInput = document.querySelector('input[name="completeInput"]');
            var node = null;
            for (var i = 0; i < currentBtn.parentNode.childNodes.length; i++){
               if (currentBtn.parentNode.childNodes[i].className == "toDoText"){
                   node = currentBtn.parentNode.childNodes[i];
               } 
            }
           
          
            completeInput.value = node.textContent;
            completeForm.submit();
        });
    });

    //add eventlistener to submit form for each edit button
    editButtons.forEach(function(currentBtn){
        currentBtn.addEventListener("click", () => {
        var node = null;
        //loop through the nodes to find text node
        for (var i = 0; i < currentBtn.parentNode.childNodes.length; i++){
            if (currentBtn.parentNode.childNodes[i].className == "toDoText"){
                node = currentBtn.parentNode.childNodes[i];
            } 
        }
        //create edit input, replace, and fill in edit input with previous text content
        var input = document.createElement("input");
        var oldInput = node.childNodes[0].textContent;
        node.replaceChild(input, node.childNodes[0]);
        node.childNodes[0].value = oldInput;
        editField = node.childNodes[0];

        //when enter is pressed, submit hidden edit form with the old todo and new todo
        editField.addEventListener("keypress", function(e) {
            if (e.key == 'Enter'){
                text = document.createTextNode(editField.value);
                node.replaceChild(text, editField);
                var editForm = document.querySelector('form[name="editForm"]');
                var editInput = document.querySelector('input[name="editInput"]');
                
                var values = [oldInput, text.textContent]
                editInput.value = values;
                editForm.submit();
                
            }
        });

    });
    
    });
});