const addbtn = document.querySelector(".add-note");
const main = document.querySelector(".main");

addbtn.addEventListener("click", function() {
    addnote();
});

const saveNote = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(note => {
        data.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(data));
};

const addnote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add(".note");
    note.innerHTML = `
        <div class="note">
            <div class="tool">
                <i class="trash fa-solid fa-trash"></i>
                <i class="save fa-regular fa-floppy-disk"></i>
            </div>
            <textarea>${text}</textarea>
        </div>
    `;

    note.querySelector(".trash").addEventListener("click", function() {
        note.remove();
        saveNote();
    });

    note.querySelector(".save").addEventListener("click", function() {
        saveNote();
    });

    main.appendChild(note);
    saveNote();
};

// Self-Calling Function to Load Notes from LocalStorage
(function() {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    if (lsNotes) {
        lsNotes.forEach(note => {
            addnote(note);
        });
    }
})();
