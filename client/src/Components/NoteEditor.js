import React, {useEffect, useState} from "react";
import "./NoteEditor.scss";
const Axios = require('axios').default;



export default function NoteEditor({getNote, setNoteEditorOpen, editNoteData}) {
    const [noteTitle, setNoteTitle] = useState([""]);
    const [noteDescription, setNoteDescription] = useState([""]);

    useEffect(() => {
        if (editNoteData) {
            setNoteTitle(editNoteData.title ? editNoteData.title : " ");
            setNoteDescription(editNoteData.name ? editNoteData.name : " ");
            
        }

    }, [editNoteData]);


    async function savingNote(event) {
        event.preventDefault();
        const noteData = {
            title: noteTitle ? noteTitle : undefined,
            name: noteDescription ? noteDescription : undefined,
        };
        if (!editNoteData)
            await Axios.post("http://localhost:4000/routers/", noteData);
        else 
            await Axios.put(`http://localhost:4000/routers/${editNoteData._id}`, noteData);
        getNote();
        cancelNote();

    }

    function cancelNote() {
        setNoteEditorOpen(false);
        setNoteTitle("");
        setNoteDescription("");
    }



    return (
    <div className= "note-editor">
        <form onSubmit={savingNote}>
            <label htmlFor="editor-title">Title </label>
            <input id="editor-title"  type="text" value = {noteTitle} onChange={(event) => setNoteTitle(event.target.value)}/>

            <label htmlFor="editor-description">Description </label>
            <textarea id="editor-description"  type="text" value = {noteDescription} onChange={(event) => setNoteDescription(event.target.value)} />


            <button className = "save-btn" type ="submit">Save</button>
            <button className= "cancel-btn" type ="button" onClick={cancelNote}>Cancel</button>
        </form>

    </div>
    )
}
