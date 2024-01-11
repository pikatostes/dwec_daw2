document.addEventListener("DOMContentLoaded", function() {
     const taskList = document.getElementById("taskList");
     const newTaskNameInput = document.getElementById("newTaskName");
     const newTaskDescriptionInput = document.getElementById("newTaskDescription");
     const addTaskButton = document.getElementById("addTask");
 
     // Recuperar las tareas almacenadas en localStorage al cargar la página
     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
 
     // Función para guardar las tareas en localStorage
     function saveTasks() {
         localStorage.setItem("tasks", JSON.stringify(tasks));
     }
 
     // Función para agregar una tarea a la lista
     function addTask(taskName, taskDescription) {
         const taskItem = document.createElement("li");
         
         const taskHeader = document.createElement("div");
         taskHeader.classList.add("task-header");
 
         const taskNameElement = document.createElement("h3");
         taskNameElement.textContent = taskName;
         
         const deleteButton = document.createElement("button");
         deleteButton.textContent = "Eliminar";
         deleteButton.addEventListener("click", function() {
             const taskIndex = tasks.findIndex(task => task.name === taskName);
             if (taskIndex !== -1) {
                 tasks.splice(taskIndex, 1);
                 saveTasks();
             }
             taskList.removeChild(taskItem);
         });
 
         taskHeader.appendChild(taskNameElement);
         taskHeader.appendChild(deleteButton);
 
         const taskDescriptionElement = document.createElement("p");
         taskDescriptionElement.textContent = taskDescription;
 
         taskItem.appendChild(taskHeader);
         taskItem.appendChild(taskDescriptionElement);
 
         taskList.appendChild(taskItem);
     }
 
     // Borrar la lista de tareas existentes
     taskList.innerHTML = "";
 
     // Cargar las tareas almacenadas en localStorage al iniciar
     if (tasks.length > 0) {
         tasks.forEach(function(task) {
             addTask(task.name, task.description);
         });
     }
 
     // Agregar una nueva tarea cuando se hace clic en el botón "Agregar"
     addTaskButton.addEventListener("click", function() {
         const taskName = newTaskNameInput.value;
         const taskDescription = newTaskDescriptionInput.value;
         if (taskName.trim() !== "") {
             addTask(taskName, taskDescription);
             tasks.push({ name: taskName, description: taskDescription });
             saveTasks();
             newTaskNameInput.value = "";
             newTaskDescriptionInput.value = "";
         }
     });
 });
 
 