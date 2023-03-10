 function setItems() {
    setNotes(notes.map(note => {
if (note.id === id) {
    const fields = note.fields;
return fields;

    } else {
    return note;
}
    }));
}
