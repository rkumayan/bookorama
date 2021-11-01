let container = document.getElementById("container");
let del = document.querySelectorAll(".parent-container #container #book-title #delete");
    Array.from(del).forEach( function(val){
        val.addEventListener('click' , function(){
            this.parentElement.remove();
        })  
    });

    