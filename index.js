import Note from "./component.js";

const App = (function () {
  window.addEventListener("DOMContentLoaded", (e) => {
    console.log("Initialized...");

    const btnAdd = document.querySelector("#btnAdd");

    btnAdd.addEventListener("click", (e) => {
      console.log("Clicked");
      const newNote = new Note();
      const notesContainer = document.querySelector(".notes-container");
      notesContainer.appendChild(newNote.createNote());
    });
  });
})();
