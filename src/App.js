import './App.css';
import 'modern-normalize/modern-normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import Container from './components/Container';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import Logo from './components/Logo';
import { connect } from 'react-redux';

const App = () => {
  return (
    <Container>
      <Logo />

      <ContactForm />

      <Filter />

      <ContactList />
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
