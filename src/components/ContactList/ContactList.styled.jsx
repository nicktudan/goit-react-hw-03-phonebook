import styled from "styled-components";

export const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 64px;
`;

export const ContactListItems = styled.li`
    list-style: disc;
`;

export const ContactListItemsData = styled.span`
    :not(:first-child) {
    padding-left: 8px;
    padding-right: 16px;
}
`;

export const ContactListItemsBtn = styled.button`
    font-size: 12px;
    font-weight: 600;
    padding: 2px 12px;
    border: 1px solid #D3D3D3;
    border-radius: 4px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;

    :hover,
    :focus {
        background-color: #B0E0E6;
    }
`;