import { useState } from 'react';
import Modal from '../Modal/Modal';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ key, bigImage, smallImage }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li key={key} className={s.ImageGalleryItem} onClick={toggleModal}>
        <img src={smallImage} alt="pic" className="ImageGalleryItem-image" />
      </li>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={bigImage} alt="big pic" />
        </Modal>
      )}
    </>
  );
}
