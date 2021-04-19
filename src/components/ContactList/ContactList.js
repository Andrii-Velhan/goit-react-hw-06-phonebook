import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

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
 
  return list;
};

const mapStateToProps = ({ phoneBook: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(phoneBookActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
