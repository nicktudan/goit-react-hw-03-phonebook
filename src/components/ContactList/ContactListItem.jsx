import PropTypes from 'prop-types';
import { ContactListItems, ContactListItemsData, ContactListItemsBtn } from './ContactList.styled'

export const ContactListItem = ({ contact: { id, name, number }, onDelete }) => {
    return <ContactListItems>
        <ContactListItemsData>{name}:</ContactListItemsData>
        <ContactListItemsData>{number}</ContactListItemsData>
        <ContactListItemsBtn type='submit' onClick={() => onDelete(id)}>Delete</ContactListItemsBtn>
    </ContactListItems>
}

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
}