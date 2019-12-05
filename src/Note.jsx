import React from 'react';

const Note = ( props ) => {

// const Note = ( { note } ) => {

    const { textBody, id, title } = props.note;

    // const { note } = props;
    // const { textBody, id, title } = note;

    // const { textBody, id, title } = props;

    return (
        <section>
            <h3>{textBody}</h3>
            <h3>{title}</h3>
            <h3>{id}</h3>
        </section>
    );
}


export default Note

