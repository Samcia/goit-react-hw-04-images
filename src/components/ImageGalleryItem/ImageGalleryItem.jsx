import { Modal } from '../Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li key={id} onClick={openModal} className="ImageGalleryItem">
        <img src={webformatURL} className="ImageGalleryItem-image" alt={alt} />
      </li>
      {isOpen && (
        <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
