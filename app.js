 
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  //get stated with getting buutonn and input

  const inputValue = document.getElementById("inputValue");
  const addButton = document.getElementById("addButton");
  // const inputResult = document.getElementById('inputResult');
  const form = document.getElementById("formAdd");
  const items = document.getElementById('items');



  addButton.addEventListener("click", addtask);

  function addtask(){

    if(inputValue.value === ""){
      alert("Please write your task, It is empty!!!")
    }else{
      
       //local
    
      
      // const toDoDiv = document.createElement('div');
      // toDoDiv.classList.add("todo")
       //////List items UI
      let newItem = inputValue.value;
      let li =  document.createElement('li');
      
      li.className = "list-group-item  mt-3 mr-5 w-50 mr-5  mx-auto align-items-center justify-content-center text-left";

      let deleteButton =  document.createElement('button');
      
      deleteButton.appendChild(document.createTextNode('Delete'));
      deleteButton.className = "btn-danger btn btn-sm float-right text-right delete";
  
      
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);

    items.appendChild(li);
    

    
//local saved
    

    //remove item
    deleteButton.addEventListener('click', removeListItem);

    function removeListItem(e){
      e.preventDefault();

      if(e.target.classList.contains('delete')){
        let li = e.target.parentNode;
        items.removeChild(li);
      }
    
      
      
    }
    //local
   
    inputValue.value = "";
    
    }
   
  }
   //retrive local data to dom
  //  function getList(){ 
  //   let tasks;
        
  //   if(localStorage.getItem('tasks') === null){
  //     tasks = []; 
  //   }else{
  //     tasks = JSON.parse(localStorage.getItem("tasks"))
  //   }
 
  //   pushing to array
  //   tasks.push(task);
 
  //   localStorage.setItem("tasks", JSON.stringify(tasks));

  //   retive
  //   tasks.forEach(function(task){
  //     let newItem = inputValue.value;
  //     let li =  document.createElement('li');
      
  //     li.className = "list-group-item  mt-3 mr-5 w-50 mr-5  mx-auto align-items-center justify-content-center text-left";

  //     let deleteButton =  document.createElement('button');
      
  //     deleteButton.appendChild(document.createTextNode('Delete'));
  //     deleteButton.className = "btn-danger btn btn-sm float-right text-right delete";
  
      
  //   li.appendChild(document.createTextNode(task));
  //   li.appendChild(deleteButton);

  //   items.appendChild(li);
  //   })
  //  }
 

  // // add
  //  //addd loacal stoarge
  //  function addlocal(task){
  //   let tasks;
        
  //   if(localStorage.getItem('tasks') === null){
  //     tasks = []; 
  //   }else{
  //     tasks = JSON.parse(localStorage.getItem("tasks"))
  //   }
 
  //   //pushing to array
  //   tasks.push(task);
 
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
 
  //  }

  

   