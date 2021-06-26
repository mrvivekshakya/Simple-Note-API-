const express = require('express');
const router = express.Router();
const notes = require('../services/notes')

//add note
router.post('/', (req, res) => {
    notes.addNote(req.body.title, req.body.body, (err, msg) => {
        if(err){
            return res.send({'err msg': err})
        }
        res.status(200).send({'msg': msg})
    });
})

router.get('/', (req, res) => {
    notes.getNotes((err,notes) => {
        if(err){
            return res.send({'err msg': err})
        }
        res.status(200).send(notes)
    })
})
router.delete('/title/:title', (req, res) => {
    notes.removeNoteByTitle(req.params.title,(err, msg) => {
        if(err){
            return res.send({'err msg': err})
        }
        res.status(200).send({'msg': msg})
    })
})

router.delete('/:uuid', (req, res) => {
    notes.removeNoteByUuid(req.params.uuid,(err, msg) => {
        if(err){
            return res.send({'err msg': err})
        }
        res.status(200).send({'msg': msg})
    })
}) 

router.get('/title/:title',(req, res) => {
    notes.getNoteByTitle(req.params.title,(err, note) => {
        if(err){
            return res.send({'err msg': err})
        }
        res.status(200).send(note)
    })
})

router.get('/:uuid',(req, res) => {
    notes.getNoteByUuid(req.params.uuid,(err, note) => {
        if(err){
            return res.send({'err msg': err})
        }
        res.status(200).send(note)
    })
})

module.exports = router;