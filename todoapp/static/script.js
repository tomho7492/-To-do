
window.addEventListener('DOMContentLoaded', (event) => {
    var inputField = document.querySelector("input[type = 'text']");
    var toDoUL = document.querySelector("ul");
    var createButton = document.querySelector(".save");
    var form = document.querySelector('#toDoForm')
    deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach(function(currentBtn){
        currentBtn.addEventListener("click", () => {
            console.log(currentBtn.parentNode.textContent);
            var deleteForm = document.querySelector('form[name="deleteForm"]');
        
            var deleteInput = document.querySelector('input[name="deleteInput"]');
            deleteInput.value = currentBtn.parentNode.textContent;
            deleteForm.submit();
    });
 

});
});