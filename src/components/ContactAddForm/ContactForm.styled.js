import styled from "@emotion/styled";
import noteBg from "../../img/note.png";
import { Field, ErrorMessage } from "formik";


export const AddContactWrap = styled.div`
    position: absolute;
    padding: 20px 40px;
    width: 330px;
    aspect-ratio: 1;
    inset: 35px 40px;
    font-size: 20px;
    color: #000000aa;
    background-image: url(${noteBg});
    background-size: contain;
    background-repeat: no-repeat;

    h2 {
        margin-bottom: 10px;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        color: #000000cc;
    }

    label {
        display: block;
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

export const Input = styled(Field)`
    width: 95%;
    display: block;
    background-color: transparent;
    border: none;
    border-bottom: 1px dotted #00000066;
    font-family: 'Indie Flower', cursive;
    font-size: inherit;

    &:hover, &:focus {
        border: 1px dotted #00000066;
    }
    &:invalid {
        background-color: red;
    }
`;

export const AddContactBtn = styled.button`
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    padding: 4px;
    display: block;
    margin: 0 auto;
    align-self: center;
    border: 2px solid #00000022;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    background-color: transparent;
    color: #000000aa;

    &:hover {
        background-color: #8bc34a69;
        border-color:#00000033;
        box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

    }
`;

export const ErrorNotify = styled(ErrorMessage)`
    font-weight: 400;
    font-size: 12px;
    color: red;
`;