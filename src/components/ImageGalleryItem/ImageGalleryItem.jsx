import { Modal } from '../Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {' '}
      <ul>
        <li onClick={openModal} className="ImageGalleryItem">
          <img
            src={webformatURL}
            className="ImageGalleryItem-image"
            alt={alt}
          />
        </li>{' '}
      </ul>
      {isOpen && (
        <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
