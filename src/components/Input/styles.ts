import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #FFF;

    border: 2px solid #D2691E;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }

`

export const ErrorMessage = styled.p`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`