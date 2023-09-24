// Select all checkboxes
// In this coding challenge your task is to finish the CheckboxList component. We have already styled it for you. Your task is to implement the functionality to both:

// Select the individual checkboxes.
// Select all checkboxes when the Select All button is clicked.

import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxList = () => {
const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
]);

const handleCheck = position => {
    const updatedCheckedState = [...checkboxes]
    updatedCheckedState[position].checked = !updatedCheckedState[position].checked
    setCheckboxes(updatedCheckedState)
}

return (
    <Container>
        <CheckboxContainer data-testid="checkbox-container">
        {checkboxes.map((checkbox, index) => (
            <CheckboxLabel key={checkbox.id}>
            <input
                data-testid={`checkbox-${index + 1}`}
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => handleCheck(index)}
            />
            {checkbox.label}
            < br/>
            {index}
            </CheckboxLabel>
        ))}
        </CheckboxContainer>
        <SelectAllButton data-testid="button">Select All</SelectAllButton>
    </Container>
);
};

export default CheckboxList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 24px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const SelectAllButton = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
        opacity: 0.8;
    }
`;