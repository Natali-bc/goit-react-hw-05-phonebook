import React, { Component } from 'react';
import styles from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span className={styles.inputTitle}>Name</span>
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <label>
            <span className={styles.inputTitle}>Number</span>
            <input
              name="number"
              value={number}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
