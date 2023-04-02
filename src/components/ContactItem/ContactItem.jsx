import PropTypes from 'prop-types';
// import { Button, ListItem } from './ContactItem.styled';

const ContactItem = ({ contacts: { name, number } }) => {
  return (
    <>
      <span> {name} : </span>
      <span>{number} </span>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactItem;
