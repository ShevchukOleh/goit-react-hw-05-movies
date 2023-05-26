import styled from "styled-components";

export const Container = styled.div`
    padding: 5px 20px;
    max-width: 1400px;

`
export const Input = styled.input`
    padding: 1px 10px;
    height: 25px;
    margin-right: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid grey;
    outline: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        border-color: orangered;
    }
    &:focus {
        border-color: orangered;
    }
`
export const Button = styled.button`
    padding: 2px 10px;
    height: 30px;
    font-size: 14px;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: white;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        color:white;
        background-color: orangered;
    }
`

export const Form = styled.form`
    margin-bottom: 10px;
`
export const Movie = styled.p`
    font-size: 16px;
    line-height: 1.2;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:last-child {
        margin-bottom: 5px;
    }
    &:hover {
        color:orangered;
    }
`
