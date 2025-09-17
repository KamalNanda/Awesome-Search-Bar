import styled from 'styled-components';

const ClearButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    margin:0;
    padding:0;
    margin-left: 10px;
    text-decoration: underline;
`

const ClearButton = ({onClick}) => {
    return <ClearButtonWrapper 
        onClick={onClick}>Clear </ClearButtonWrapper>
}

export default ClearButton;