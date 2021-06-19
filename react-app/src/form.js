import React, { useState } from 'react';

export const Form = ({ addItem, clearList }) => {
    const [text, setText] = useState('');

    const handleChange = event => {
        setText(event.target.value);
    };

    const handleSave = (event) => {
        event.preventDefault();

        if (!text) {
            return;
        }
        
        addItem(text);
        setText('');
    }

    const clearText = (ev) => {
        ev.preventDefault();

        clearList();
    }

    return (
        <form onSubmit={ handleSave }>
            <div>
                <label htmlFor="text">Enter text: </label>
                <input type="text" id="text" value={ text } onChange={ handleChange } />
            </div>
            <br/>
            <div>
                <button>Save</button>
                <button onClick={ clearText }>Clear</button>
            </div>
        </form>
    );
}