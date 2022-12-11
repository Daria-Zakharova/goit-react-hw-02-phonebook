import PropTypes from 'prop-types';
import { Contacts, ContactItem } from "./ContactList.styled";
import {FaWindowClose} from "react-icons/fa"

export const ContactList = ({contacts, onClickCloseBtn}) => {
    return (
        <Contacts>
            {contacts.map(({id, name, number}) => 
            <ContactItem key={id}>
                <span className="name">{name}</span>
                <span className="number">{number}</span>
                <button className="close-btn" type="button" id={id} onClick={onClickCloseBtn}><FaWindowClose color="red" size={20}/></button>
            </ContactItem>)}
        </Contacts>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),).isRequired,
    onClickCloseBtn: PropTypes.func.isRequired,
}