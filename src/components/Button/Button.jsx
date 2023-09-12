import PropTypes from 'prop-types';

export const Button = ({ incrementPage }) => {
  return (
    <>
      <button className="Button" type="button" onClick={incrementPage}>
        LOAD MORE
      </button>
    </>
  );
};

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};
