document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const addNoteButton = document.getElementById('addNoteButton');
    const notesContainer = document.getElementById('notesContainer');

    addNoteButton.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.textContent = noteText;
            notesContainer.appendChild(noteElement);
            noteInput.value = ''; // Clear the input field
        }
    });

    // Optional: Allow pressing Enter to add a note
    noteInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            addNoteButton.click();
        }
    });
});
