// import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem'
import { ContactsList } from './ContactList.styled'

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ContactsList>
            {contacts.map(contact => {
                return <ContactListItem contact={contact} onDelete={onDelete} key={contact.id} />;
            })}
        </ContactsList>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
    onDelete: PropTypes.func.isRequired,
}