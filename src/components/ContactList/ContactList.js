import React from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import './ContactList.css';
// import fadeStyles from '../../components/fade.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

// contacts={visibleContacts}
// onRemoveContact={this.deleteContact}
const ContactList = ({ items, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className="ContactList">
      {items.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={250}
          classNames="ContactList__item-fade"
        >
          <li key={id} className="ContactList__item">
            <p className="ContactList__name">
              {name}: {number}
            </p>

            <IconButton
              className="ContactList__button"
              onClick={() => onRemoveContact(id)}
              aria-label="Remove Contact"
            >
              <DeleteIcon width="12" height="12" fill="#fff" />
            </IconButton>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemoveContact: PropTypes.func,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  let list = allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
  // if (!list.length) list = contacts
  // if (filter !== '' && list.length === 0) {
  //  alert('Sorry, nothing was found for your request.');
  // }
  return list;
};

const mapStateToProps = ({ phoneBook: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(phoneBookActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
