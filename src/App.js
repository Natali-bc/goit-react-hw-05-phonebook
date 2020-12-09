import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import utils from './components/utils';
import styles from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import Notification from './components/Notification/Notification';
import notificationStyles from './components/Notification/Notification.module.css';

class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    contacts: [],
    filter: '',
    isExists: false,
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    if (savedContacts) {
      this.setState({
        contacts: savedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleDelete = id => {
    this.setState(state => {
      const contacts = state.contacts.filter(item => item.id !== id);
      return {
        contacts,
      };
    });
  };

  addContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      this.setState({ isExists: true });
      setTimeout(() => {
        this.setState({ isExists: false });
      }, 2000);
    } else {
      const contact = {
        id: utils(),
        name: name,
        number: number,
      };
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  render() {
    const { contacts, filter, isExists } = this.state;
    const visibleContacts = this.handleFilter(contacts, filter);
    return (
      <>
        <div>
          <CSSTransition
            in={true}
            appear={true}
            classNames={styles}
            timeout={500}
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>
          <ContactForm addContact={this.addContact} />
          <h2>Contacts</h2>
          <Filter handleChange={this.handleChange} filter={filter} />
          <ContactList
            visibleContacts={visibleContacts}
            handleDelete={this.handleDelete}
          />
          <CSSTransition
            in={isExists}
            timeout={250}
            classNames={notificationStyles}
            unmountOnExit
          >
            <Notification message="This name is already in your contacts" />
          </CSSTransition>
        </div>
      </>
    );
  }
}

export default App;
