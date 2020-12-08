import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';

const Filter = ({ handleChange, filter }) => {
  return (
    <label>
      <span className={styles.inputTitle}>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
