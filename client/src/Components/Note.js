import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPencil } from '@fortawesome/free-solid-svg-icons'
import "./Note.scss";
const Axios = require('axios').default;
const element = <FontAwesomeIcon icon={faCircleXmark} />
const edit = <FontAwesomeIcon icon={faPencil} />
function Note({note, getNote, editNote}) {

    async function deleting() {
        await Axios.delete(`http://localhost:4000/routers/${note._id}`)
        getNote();
    }

    return (

    <div className= "note">
    {note.name && <h2 className="heading">{note.title}</h2>}
    
    {note.title && <p className="desceription">{note.name}</p>}
    <button className="deleteButton" onClick= {deleting}><div className="icon">{element} </div></button>
    <button className="editButton" onClick={() => editNote(note)}> <div className="icon">{edit} </div> </button>
    
    
    </div>
    )
};

export default Note;  
