import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem.jsx';
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ visibleContacts, handleDelete }) => {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {visibleContacts.map(contact => {
        return (
          <CSSTransition key={contact.id} timeout={250} classNames={styles}>
            <ContactListItem
              contact={contact}
              handleDelete={() => handleDelete(contact.id)}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};
ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
