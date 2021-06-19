import React from 'react';

export const Task = ({ id, name, done, setDone }) => {
    const handleClick = () => {
        setDone(id);
    };

    return (
        <li className={ done ? 'done' : '' } onClick={ handleClick }>
            { name }
        </li>
    );
};
