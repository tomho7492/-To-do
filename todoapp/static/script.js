
window.addEventListener('DOMContentLoaded', (event) => {
    var inputField = document.querySelector("input[type = 'text']");
    var toDoUL = document.querySelector("ul");
    var createButton = document.querySelector(".save");
    var form = document.querySelector('#toDoForm')
    

    //if enter key is pressed, add list item
    inputField.addEventListener("keypress", function(keyPressed){
        if(keyPressed.which === 13){
            if (this.value == ""){
                return 0;
            } else {
            var li = document.createElement("li");
            var content = inputField.value
            li.append(content);
            toDoUL.appendChild(li);
    
            }
    }
    });

    //if create button is pressed, add list item
    createButton.addEventListener("click", () => {
        if (inputField.value == ""){
            return 0;
        } else {
            var li = document.createElement("li");
            var content = inputField.value
            li.append(content);
            toDoUL.appendChild(li);
          
        }

    });
});