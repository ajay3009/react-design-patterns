import React, { createRef } from 'react';

export const UncontrolledForm = () => {
    const nameInput = createRef();
    const ageInput = createRef();
    const colorInput = createRef();
    const handleSubmit = (e) => {
        console.log(nameInput.current.value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder='Name' ref={nameInput} /> 
            <input name="age" type="number" placeholder='Age' ref={ageInput} /> 
            <input name="color" type="text" placeholder='Colr' color={colorInput} /> 
            <input type="submit" value="Submit" /> 
        </form>
    )
}