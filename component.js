class Note {
  #noteTitle = "";
  #noteText = "";

  constructor() {
    this.state = "EDIT";
    this.container = document.createElement("div");
    this.inputTitle = document.createElement("input");
    this.input = document.createElement("input");

    this.btnAdd = document.createElement("button");
    this.btnDelete = document.createElement("button");

    this.container.classList.add("note-item");

    this.container.appendChild(this.inputTitle);
    this.container.appendChild(this.input);
    this.container.appendChild(this.btnAdd);
    this.container.appendChild(this.btnDelete);
  }

  setState() {
    if (this.state === "NOEDIT") {
      console.log(this.state);
      this.inputTitle.setAttribute("disabled", "true");
      this.input.setAttribute("disabled", "true");
      this.btnAdd.style.display = "none";
      this.btnDelete.style.display = "block";
    } else if (this.state === "EDIT") {
      console.log(this.state);
      this.inputTitle.removeAttribute("disabled");
      this.input.removeAttribute("disabled");

      this.btnAdd.style.display = "block";
      this.btnDelete.style.display = "none";
    }
  }

  createNote() {
    this.inputTitle.textContent = this.#noteTitle;
    this.input.textContent = this.#noteText;

    this.btnAdd.textContent = "Done";
    this.btnDelete.textContent = "Delete";

    this.btnDelete.style.display = "none";

    this.btnAdd.addEventListener("click", (e) => {
      e.stopPropagation();

      console.log("Done");
      this.#noteText = this.input.value;
      this.state = "NOEDIT";
      this.setState();
    });

    this.btnDelete.addEventListener("click", (e) => {
      e.stopPropagation();

      this.container.parentElement.removeChild(this.container);
    });

    this.container.addEventListener("click", (e) => {
      this.state = "EDIT";
      this.setState();
    });

    return this.container;
  }
}

export default Note;
