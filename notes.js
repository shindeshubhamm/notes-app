const fs = require('fs');
const chalk = require('chalk');

const readNote = (title) => {
    const notes = loadNotes();
    if(notes.length === 0) {
        console.log("No notes found...");
    } else {
        const dbNote = notes.find(note => note.title === title);
        if(!dbNote) {
            console.log(chalk.bgRed.black("No note found..."));
        } else {
            console.log(chalk.bold("Title: ") + dbNote.title);
            console.log(chalk.bold("Body: ") + dbNote.body);
        }
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blackBright.bgYellow.bold("Your Notes:"));
    notes.forEach(note => {
        console.log(note.title);
    })
}

const removeNote = (title) => {
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log(chalk.bgYellow.black("No notes available..."));
    } else {
        const afterRemove = notes.filter(note => note.title !== title);
        if (afterRemove.length === notes.length) {
            console.log(chalk.bgRed.black("Note not found..."));
        } else {
            saveNotes(afterRemove);
            console.log(chalk.bgGreen.black("Note removed successfully..."));
        }
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title == title);

    // console.log(duplicateNote)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen.black("New note added successfully!"));
    }
    else {
        console.log(chalk.bgRed.black("Note title already exists!"));
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};