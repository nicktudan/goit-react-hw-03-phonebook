import styled from "styled-components";

export const FilterContainer = styled.div`
    margin-top: 28px;
    margin-bottom: 28px;
`;

export const FilterInput = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    padding: 4px 8px;
    border: 1px solid #D3D3D3;
    outline: none;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        border-radius: 2px;
        border: 2px solid #00BFFF;
        box-shadow: rgba(30, 144, 255, 0.3) 0px 1px 2px 0px, rgba(30, 144, 255, 0.15) 0px 2px 6px 2px;
    }
`;

export const FilterLabel = styled.label`
    font-size: 32px;
`;