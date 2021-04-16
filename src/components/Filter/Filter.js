import PropTypes from 'prop-types';
import './Filter.scss';
import { CSSTransition } from 'react-transition-group';
// import * as actions from '../../redux/phoneBook/phoneBook-actions'
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import { connect } from 'react-redux';

const Filter = ({ value, onChangeFilter, onClearFilter, items }) => (
  <CSSTransition
    in={items.length > 1}
    timeout={250}
    classNames="Filter-fade"
    unmountOnExit
    onExiting={() => onClearFilter()}
  >
    <div className="filterForm">
      <label htmlFor="find" className="Label filterLabel">
        Find contact by name
      </label>
      <input
        type="text"
        value={value}
        id="find"
        className="filterInput"
        onChange={onChangeFilter}
        // onChange={event => onChangeFilter(event.target.value)}
      />
    </div>
  </CSSTransition>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  value: state.phoneBook.filter,
  items: state.phoneBook.items,
});

const mapDispatchToProps = dispatsh => ({
  onChangeFilter: e => dispatsh(phoneBookActions.changeFilter(e.target.value)),
  onClearFilter: e => dispatsh(phoneBookActions.changeFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
