import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import './ContactForm.scss';
import Notification from '../Notification';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    message: null,
  };

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onSubmit: PropTypes.func,
  };

  static defaultProps = {};

  setMessage = note => {
    this.setState({ message: note });
    setTimeout(() => {
      this.setState({ message: null });
    }, 2500);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  setMessage = note => {
    this.setState({ message: note });
    setTimeout(() => {
      this.setState({ message: null });
    }, 2500);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    // const { contacts } = this.props;

    if (name === '') {
      this.setMessage('Enter concact name, please!');
      return;
    }

    if (number === '') {
      this.setMessage('Enter concact phone number, please!');
      return;
    }

    if (name === '' && number === '') {
      this.setMessage('Enter data to each of inputs: [name & number]!');
    }

    if (
      this.props.items.find(
        item => item.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      this.setMessage(`Contact ${name} is аlready exists!`);
      return;
    }
    // this.setState(prevState => {
    //   return { contacts: [...prevState.contacts, contact] };
    // });
    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, message } = this.state;
    return (
      <>
        <Notification message={message} />
        <form className="ContactForm" onSubmit={this.handleSubmit}>
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            value={name}
            id="name"
            className="ContactForm__input"
            name="name"
            onChange={this.handleChange}
            placeholder="Anton Cherny"
          />

          <label className="Label" htmlFor="number">
            Number
          </label>
          <input
            type="tel"
            value={number}
            id="number"
            className="ContactForm__input"
            name="number"
            onChange={this.handleChange}
            placeholder="+38 (066) 000-00-00"
          />

          <button type="submit" className="ContactForm__button">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: state.phoneBook.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(phoneBookActions.addContact({ name, number })),
});

// export default connect(null, mapDispatchToProps)(ContactForm);
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
