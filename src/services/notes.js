const fs = require('fs')
const chalk = require('chalk')
const { v4: uuidv4 } = require('uuid');
const path = require('path') 

const addNote = (title, body, cb) => {
    console.log();
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            uuid: uuidv4(),
            title: title,
            body: body
        })
        saveNotes(notes)
        cb(undefined,'New note added!')
    } else {
        cb('Note title taken!',undefined)
    }
}

const removeNoteByTitle = (title,cb) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        cb(undefined,'Note removed!')
        saveNotes(notesToKeep)
    } else {
        cb('No note found!',undefined)
    }    
}
const removeNoteByUuid = (uuid,cb) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.uuid !== uuid)

    if (notes.length > notesToKeep.length) {
        cb(undefined,'Note removed!')
        saveNotes(notesToKeep)
    } else {
        cb('No note found!',undefined)
    }    
}

const getNotes = (cb) => {
    const notes = loadNotes()
    if(notes){
        cb(undefined,notes)
    }
}

const getNoteByTitle = (title,cb) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        cb(undefined,note)
    }else {
        cb('Note not found!',undefined)
    }
}
const getNoteByUuid = (uuid,cb) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.uuid === uuid)

    if(note){
        cb(undefined,note)
    }else {
        cb('Note not found!',undefined)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(path.join(__dirname,'../data/notes.json'), dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(path.join(__dirname,'../data/notes.json'))
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote,
    removeNoteByUuid,
    removeNoteByTitle,
    getNotes,
    getNoteByTitle,
    getNoteByUuid
}