
window.addEventListener('DOMContentLoaded', (event) => {
    var inputField = document.querySelector("input[type = 'text']");
    var toDoUL = document.querySelector("ul");
    var createButton = document.querySelector(".save");
    var form = document.querySelector('#toDoForm')
    deleteButtons = document.querySelectorAll(".delete");
    completeButtons = document.querySelectorAll(".complete");

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
});