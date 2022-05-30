import styled from "styled-components";

export const Todo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;

`

export const Text = styled.h3`
    font-weight: 400;
`

export const DeleteBtn = styled.button`
    border: none;
    cursor: pointer;
    background-color: red;


    svg{
        height: 10px;
        width: 10px;
        object-fit: cover;
        stroke: white;
    }
`