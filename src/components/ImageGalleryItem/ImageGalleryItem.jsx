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
      <li className="ImageGalleryItem">
        <img
          onClick={openModal}
          src={webformatURL}
          className="ImageGalleryItem-image"
          alt={alt}
        />

        {isOpen && (
          <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
        )}
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
