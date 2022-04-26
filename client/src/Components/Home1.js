import React, {useState, useEffect, useContext} from "react";
import Note from "./Note";
import NoteEditor from "./NoteEditor";
import "./Home1.scss";
import Context from "../ReactContext /Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Axios = require('axios').default;
const element = <FontAwesomeIcon icon={faCoffee} />



function Home1() {
    const [notes, setNotes] = useState([]);
    const [noteEditorOpen, setNoteEditorOpen] = useState(false);
    const [editNoteData, setEditNoteData] = useState(null);
    const [name, setName] = useState(undefined);

    const {client} = useContext(Context);



    useEffect(() => {
        if(!client) setNotes([]);
        else getNote();
    }, [client]);

    async function getNote(){
        const notePath = await Axios.get("http://localhost:4000/routers/");
        setNotes(notePath.data)
    }
    async function clientName() {
        const response = await Axios.get("http://localhost:4000/auth/loogedName");
        setName(response.data)
    }

    function editNote(noteData){
        setEditNoteData(noteData);
        setNoteEditorOpen(true);

    }

    function renderNote(){
        let sortedNote = [...notes];
        sortedNote = sortedNote.sort((a, b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt);
        })  
        return sortedNote.map((note, i) => {
            return <Note 
            key={i}
            note={note} 
            getNote={getNote}
            editNote ={editNote}

            />

        })
        
        
    }


    return (
        <div className="Home"> 
        {!noteEditorOpen && client &&(
        <div>
            <h2>{clientName}</h2>
            <button className="add-btn" onClick={() => setNoteEditorOpen(true)}>Add Note</button>

        </div>
        )}
        {noteEditorOpen && ( 
        <NoteEditor 
        setNoteEditorOpen ={setNoteEditorOpen} 
        getNote ={getNote}
        editNoteData = {editNoteData}    
        />
            )}
        {!noteEditorOpen && client && (<div className="noteBox">{renderNote()}</div>)} 
        { !client && (<div><h2 className = "WelcomeS">Welcome to Sticky Notes {element}</h2></div>)} 








        </div>
    );
}

export default Home1; 