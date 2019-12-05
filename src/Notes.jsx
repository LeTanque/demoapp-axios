import React from 'react';
import Note from "./Note";

// const Notes = (props) => {
// same as :
// const Notes = (props.notes) => {
// same as :
const Notes = ({ notes }) => {
    
    console.log('notes in Notes.jsx --> ', notes);
    // console.log('props in Notes --> ', props);
    


    return (
        <>
            <h1>Notes</h1>
            {notes.map(note => (
                <Note  
                    note={note}
                    // textBody={note.textBody}  
                    // title={note.title}  
                    // id={note._id} 
                />
            ))}
        </>
    );
}


export default Notes

