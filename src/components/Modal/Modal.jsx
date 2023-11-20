import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ largeImageURL, closeModal, alt }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal]);

  return (
    <>
      <div className="Overlay" onClick={closeModal}></div>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
        {/* <button onClick={closeModal} className="ModalCloseButton">
          Close dialog
        </button> */}
      </div>
    </>
  );
};
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
