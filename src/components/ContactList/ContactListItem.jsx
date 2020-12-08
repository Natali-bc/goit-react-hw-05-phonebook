import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';

const ContactListItem = ({ contact, handleDelete }) => {
  return (
    <div className={styles.wrapper}>
      <li className={styles.contactListItem}>
        {contact.name}: {contact.number}
      </li>
      <button type="button" onClick={handleDelete} className={styles.btnDelete}>
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
