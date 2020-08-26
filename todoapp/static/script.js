
window.addEventListener('DOMContentLoaded', (event) => {
    var inputField = document.querySelector("input[type = 'text']");
    var toDoUL = document.querySelector("ul");
    var createButton = document.querySelector(".save");
    var test = "apples";
    
    //if enter key is pressed, add list item
    inputField.addEventListener("keypress", function(keyPressed){
        if(keyPressed.which === 13){
            if (this.value == ""){
                return 0;
            } else {
            var li = document.createElement("li");
            li.append(this.value);
            toDoUL.appendChild(li);
            this.value = "";
            }
    }
    });

    //if create button is pressed, add list item
    createButton.addEventListener("click", () => {
        if (inputField.value == ""){
            return 0;
        } else {
            var li = document.createElement("li");
            li.append(inputField.value);
            toDoUL.appendChild(li);
            inputField.value = "";
        }

    });
});