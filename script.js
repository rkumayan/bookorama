let container = document.getElementById("container");
let del = document.querySelectorAll(".parent-container #container #book-title #delete");
    Array.from(del).forEach( function(val){
        val.addEventListener('click' , function(){
            this.parentElement.remove();
        })  
    });

    
    function addHTML(){
        let bookName = document.getElementById("add-book").value;
        if( bookName == "")
            alert(" Enter a book name first :( ");
        else{
            document.getElementById("add-book").value = "";
            // create all the required elements
            let li = document.createElement("li");
            let btn = document.createElement("button");

            // add classes to created elements
            li.id="book-title";
            btn.id="delete";
            //insert content to the created tags
            btn.textContent="delete";
            li.textContent=bookName;
            
            //append the elements
            li.appendChild(btn);
            container.appendChild(li);
            
            //adding delete button functionality to above created book-titles
            container = document.getElementById("container");
            del = document.querySelectorAll(".parent-container #container #book-title #delete");
            Array.from(del).forEach( function(val){
                val.addEventListener('click' , function(){
                    this.parentElement.remove();
                })  
            });
            
        } 
         
    }
    

