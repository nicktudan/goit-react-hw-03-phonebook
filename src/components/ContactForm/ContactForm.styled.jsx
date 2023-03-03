import styled from "styled-components";
import { 
    Form as FormikForm,
    Field as FormikField,
    ErrorMessage as FormikError, 
} from 'formik';

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    margin-bottom: 28px;
    padding: 20px 130px 20px 20px;
    border: 2px solid black;
    
`;

export const Field = styled(FormikField)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 4px 8px;
    border: 1px solid #D3D3D3;
    outline: none;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);


    ::placeholder {
        color: #708090;
        font-size: 16px;
    }

    :hover,
    :focus {
        border-radius: 2px;
        border: 2px solid #00BFFF;
        box-shadow: rgba(30, 144, 255, 0.3) 1px 1px 2px 0px, rgba(30, 144, 255, 0.15) 2px 2px 6px 1px;
    }
`;

export const FormBtn = styled.button`
    max-width: 120px;
    margin: 16px 8px 0px 0px;
    padding: 4px 0 4px 0;
    border: 1px solid #D3D3D3;
    border-radius: 4px;
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.2;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;

    :hover,
    :focus {
        background-color: #B0E0E6;
    }
`;

export const ErrorMessage = styled(FormikError)`
    margin-bottom: 12px;
    font-size: 14px;
    font-style: italic;
    color: #DC143C;
`;