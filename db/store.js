const util = require('util');
const fs = require('fs');
const { v4: newID } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// --> we call without the PROMISE being returned
// ASYNC method in ES5 syntax 
/*
fs.readFile('db/db.json', 'utf8', (error, data) => {
    if(error) {
        throw error;
    }
    console.log("Data: ", data)
    res.json(data)
})

fs.readFilePromise()
    .then(data)
    .catch(error)
*/


class Store {
    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((result) => {
            return JSON.parse(result);
        });
    }

    postNotes(note) {
        return this.getNotes()
            .then((existingNotes) => {
                note.id = newID();
                existingNotes.push(note);
                return existingNotes;
            })
            .then((newNotes) => {
                this.write(newNotes);
            })
            .then(() => {
                return note;
            });
    }

    deleteNote(noteID) {
        return this.getNotes().then((existingNotes) => {
            const filteredNotes = existingNotes.filter((note) => {
                return note.id !== noteID;
            });
            this.write(filteredNotes);
        });
    }
}

module.exports = new Store();
