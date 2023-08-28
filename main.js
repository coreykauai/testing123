// create our variables w/ document.querySelector("") or getelementbyId
/* input box */
const inputBox = document.getElementById("taskInput");
/* input container */
const newTaskContainer = document.getElementById("main-list");
/* container of lists */
const listContainer = document.querySelector(".list-container");
/* counter for active items */
const counter = document.getElementById("counter");
/* checkbox to mark done*/
const checker = document.getElementsByClassName("checkbox");

// This function will be executed when the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  // countFunction(); // create our variables w/ document.querySelector("") or getelementbyId
  /* input box */
  const inputBox = document.getElementById("taskInput");
  /* input container */
  const newTaskContainer = document.getElementById("main-list");
  /* container of lists */
  const listContainer = document.querySelector(".list-container");
  /* counter for active items */
  const counter = document.getElementById("counter");
  /* button for remove */
  const removeBtn = document.querySelectorAll(".removeBtn");
  /* button for check done */
  const checker = document.getElementsByClassName("checkbox");

  // This function will be executed when the DOM is fully loaded.
  document.addEventListener("DOMContentLoaded", function () {
    countFunction();

    // renderTasks() only uncomment for testing. if issue, comment back out.

    // Enter key to save a new task
    inputBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        newTask();
      }
    });
  });
  //1. Create a new list item that is in a container seperate from the rest of the list items.
  // For memory storage, there should be an input field, an id of date&time; and a name assigned to the list item.
  // we also want to assign it to the list of active.
  function newTask() {
    if (inputBox.value === "" || inputBox.value == null)
      return; /* if inputBox is blank then return so that the user cannot submit a blank task */
    let listItem =
      document.createElement(
        "li"
      ); /* otherwise lets make a new list item. Maybe new variable listItem and use it to create a list item element (li) */
    listItem.innerHTML =
      /* Then we can set the innerHTML text of that item to be the inputbox's value, and the other typical attributes of a checkbox.  */
      `<label class="active"><span class="checkbox"></span> 
    <span class="text">${inputBox.value}</span> </label> <span class="removeBtn"></span>`; /* Also assign it a class of active */
    listItem.setAttribute(
      "id",
      Date.now().toString()
    ); /* Assign an id of date&time; and a name assigned> */
    newTaskContainer.prepend(
      listItem
    ); /* Then we can move the list item down into the list container when enter is pressed */
    inputBox.value = ""; /* clears the input field after enter */
    countFunction(); // Call to update the counter
    save();
    markDone();
  }
  /* Save in the memory and refresh and pull from memory (akaa render tasks list) */
  /* reference the browser local storage to store key value pairs. */
  function save() {
    localStorage.setItem("data", listContainer.innerHTML);
  }
  function renderTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
  }

  // 2. Mark complete when checkbox checked.
  // Checkbox click changes styling to blue w/ check, text, and now completed.
  // Perhaps checkbox is an image file and not a button
  /* addEventListener on click of empty circle Image.  */
  // console.log(checker);
  function markDone() {
    console.log("testing");
    for (let checks of checker) {
      checks.addEventListener("click", (event) => {
        event.target.classList.toggle("done");
        event.target.parentElement.classList.toggle("completed");
      });
    }
    save();
  }
  markDone();
  /* if box is not clicked, complete is false */
  /* otherwise if true then below code */
  /* text style changed to light grey color and strikethrough */
  /* add blue check image */
  /* completed = true */
  /* Save in the memory and refresh and pull from memory (aka render tasks list) */

  // 3.
  // x button onclick deletes from memory (nodes list).
  /* Image file of x is in the css. All I did was add the JS to remove if clicked. */
  /* otherwise no image of x when no hover? That should be css. */
  /* Look for parent and use the built in remove function. List item value / input box value is removed. */
  /* Save in the memory and refresh and pull from memory (aka render tasks list) */
  function removeItem(liElement) {
    liElement.remove();
    countFunction();
  }

  listContainer.addEventListener("click", (e) => {
    // Check if the clicked element has the class "removeBtn"
    if (e.target.classList.contains("removeBtn")) {
      // Find the parent <li> element and remove it
      removeItem(e.target.parentElement);
      save();
    }
  });

  // 4. Takes everything with value of completed true and removes from node list
  /* When button clicked, the completed items are removed from memory (node list). */
  /* Save in the memory and refresh and pull from memory (aka render tasks list) */

  // 5. Integrate filter options for all/active/complete todos

  //6. counter the number of items with a class name of active by selecting all, counting the length of the items.
  // function countFunction() {
  //   const activeLabels = document.querySelectorAll(".active");
  //   const count = activeLabels.length;
  //   /* change the innerHTML to the count */
  //   counter.textContent = count + " items left";
  // }

  // Enter key to save a new task
  inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      newTask();
    }
  });
});
