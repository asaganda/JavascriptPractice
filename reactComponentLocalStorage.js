import React from 'react';
import { useState } from 'react'

const App = () => {
    // Edit this component
    // need state for the input
    const [coolText, setCoolText] = useState(localStorage.getItem('inputValue') || '');
    // need find out how to save data to local storage
    const handleChange = e => {
    setCoolText(e.target.value)
    localStorage.setItem('inputValue', e.target.value)
    }

    return (
    <div>
        <input 
        data-testid='input-id' 
        type="text" 
        value={coolText}
        onChange={handleChange}
        />
        {coolText}
    </div>
    );
};

export default App;