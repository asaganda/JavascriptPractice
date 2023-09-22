// Styled Button
// Create a component called App that renders a button with the text “Click me!”. The button should have the following styles:

// A solid blue background color
// A white text color
// A font size of 16px
// A padding of 10px 20px
// A border-radius of 5px
// A pointer cursor
// A hover effect that changes the background color to light blue and the text color to black.

import React from 'react';
import styled from "styled-components";

const App = () => {
  // Write your code here
    return (
        <Button>Click me!</Button>
    )
};

const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: lightblue;
        color: black;
    }
`

export default App;