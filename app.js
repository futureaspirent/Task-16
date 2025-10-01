const inputBox = document.getElementById('input-box');
    const listItems = document.getElementById('listitems');

    // Add task
    function addTask() {
      if (inputBox.value === '') {
        alert("You need to write something!");
      } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;

        let span = document.createElement('span');
        span.textContent = "✖";
        li.appendChild(span);

        listItems.appendChild(li);
        inputBox.value = "";
        saveData();
      }
    }

    // Check or delete
    listItems.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        if (e.target.classList.contains("checked")) {
        alert("🎉 Another step towards success!");
        }
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    });

    // Save tasks to localStorage
    function saveData() {
      localStorage.setItem("todoData", listItems.innerHTML);
    }

    // Load tasks from localStorage
    function showTasks() {
      listItems.innerHTML = localStorage.getItem("todoData") || "";
    }

    showTasks();