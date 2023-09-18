import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, closeModal, alt }) => {
  return (
    <div onClick={closeModal} className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
