import React from 'react';
import styles from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultProps = {
  message: 'This name is already in your contacts',
};

export default Notification;
