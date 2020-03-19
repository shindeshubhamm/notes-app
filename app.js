const yargs = require("yargs");
const notes = require('./notes.js');

// Creating various commands to work with cli
// add, remove, list, remove

// Add a note
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: "Title to a note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note description",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a added note!',
    builder: {
        title: {
            describe: 'Title of note to be deleted!',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// List all notes
yargs.command({
    command: 'list',
    describe: 'Listing all notes!',
    handler() {
        notes.listNotes()
    }
})

//Read all notes
yargs.command({
    command: 'read',
    describe: 'Read note!',
    builder: {
        title: {
            describe: "Note to view",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();