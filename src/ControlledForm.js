import React, { useEffect, useState } from 'react';

export const ControlledForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            console.log("Name must be 2 or more characters");
        }
    }, [name])

    return (
        <form>
            <input type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" name="age" placeholder='Age' value={age} onChange={(e) => setAge(Number(e.target.value))}/>
            <input type="text" name="color" placeholder='Color' value={color} onChange={(e) => setColor(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}