import './App.css';
import 'modern-normalize/modern-normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
// import { CSSTransition } from 'react-transition-group';
import Logo from './components/Logo';
import { connect } from 'react-redux';
// import phoneBookActions from '../src/redux/phoneBook/phoneBook-actions';

const App = ({ items }) => {
  return (
    <Container>
      <Logo />

      <ContactForm />

      {/* {(items.length > 1 || items.phoneBook.filter) && <Filter />}	 */}
      {/* {(items.length > 1) && <Filter />} */}
      <Filter />

      {/* <CSSTransition in={items.length > 0} timeout={500} unmountOnExit> */}
      <ContactList />
      {/* </CSSTransition> */}
    </Container>
  );
};

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  items: state.phoneBook.items,
});

export default connect(mapStateToProps, null)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);

//========== old-code: ===========

// state = {
// 	message: null
// };

// setMessage = (note) => {
// 	this.setState({ message: note });
// 	setTimeout(() => {
// 		this.setState({ message: null });
// 	}, 2500);
// }

// addContact = (name, number) => {
// 	const contact = {
// 		id: uuidv4(),
// 		name,
// 		number,
// 	};

// if (name === '') {
// 	this.setMessage('Enter concact name, please!');
// 	return;
// }
// if (number === '') {
// 	this.setMessage('Enter concact phone number, please!');
// 	return;
// }
// if (this.state.contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
// 	this.setMessage(`${name} is аlready exists in contacts !`);
// 	return;
// }
// this.setState(prevState => {
// 	return { contacts: [...prevState.contacts, contact], };
// });

// this.state.contacts.find(
// 	// item => item.name === name,
// 	item => item.name.toLowerCase() === name.toLowerCase(),
// )
// 	? alert(`${name} is аlready exists in contacts !!!`)
// 	: this.setState(({ contacts }) => ({
// 		contacts: [contact, ...contacts],
// 	}));

// deleteContact = contactId => {
// 	this.setState(prevState => ({
// 		contacts: prevState.contacts.filter(contact => contact.id !== contactId),
// 	}));
// 	// console.log(contactId);
// };

// changeFilter = event => {
// 	this.setState({ filter: event.currentTarget.value });
// };

// getVisibleContacts = () => {
//   const { contacts, filter } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return normalizedFilter.length > 0
//     ? this.state.contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter),
//       )
//     : this.state.contacts;
// };

// componentDidMount() {
// 	const contacts = localStorage.getItem('contacts');
// 	const parsedContacts = JSON.parse(contacts);

// 	if (parsedContacts) {
// 		this.setState({ contacts: parsedContacts });
// 	}
// }

// componentDidUpdate(prevProps, prevState) {
// 	if (this.state.contacts !== prevState.contacts) {
// 		localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
// 	}
// }

// const { filter, contacts, message } = this.state;
// const normalizedFilter = filter.toLowerCase();
// const totalContactsCount = this.state.contacts.length;
// const visibleContacts =
// 	normalizedFilter.length > 0
// 		? this.state.contacts.filter(contact =>
// 			contact.name.toLowerCase().includes(normalizedFilter),
// 		)
// 		: this.state.contacts;
