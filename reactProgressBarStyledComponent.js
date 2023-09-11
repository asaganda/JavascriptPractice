// Progress Bar
// Create a component called ProgressBar displays a progress bar. The progress bar should have the following styling applied:

// A width of 100%
// A height of 20px
// A border radius of 5px
// The completed bit should be green
// The remaining bit should be lightgrey
// The component should accept a percent prop which is used to determine how many percents of the progress bar to fill with green colour.

import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 5px;
    background-color: lightgrey;
`;

const Progress = styled.div`
    height: 100%;
    background-color: green;
    border-radius: 5px;
    width: ${(props) => props.percent > 100 ? 100 : props.percent}%;
`;

const ProgressBar = ({ percent = 12 }) => {

    return (
    <Wrapper data-testid="wrapper">
        <Progress data-testid="progress" percent={percent}/>
    </Wrapper>
    );
};

export default ProgressBar;