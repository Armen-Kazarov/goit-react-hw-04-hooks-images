import { useState, useEffect } from 'react';
import Spiner from '../Loader/Loader';
import apiRes from '../../services/apiService';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import LoadMoreBtn from '../Button/Button';
import s from './ImageGallery.module.css';

export default function ImageGallery({ searchQueryProp }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiRes
      .getImagesData(searchQueryProp)
      .then(response => {
        setImages(response);
        setIsLoading(true);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQueryProp]);

  useEffect(() => {
    setIsLoading(true);
    setImages([]);

    apiRes.getImagesData(searchQueryProp).then(newImages => {
      setImages(newImages);
      setPage(page + 1);
      setIsLoading(false);
    });
  }, [searchQueryProp]);

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  const handleLoadMoreImages = () => {
    setIsLoading(true);

    return apiRes.getImagesData(searchQueryProp, page).then(newImages => {
      setImages([...images, ...newImages]);
      setPage(page + 1);
      setIsLoading(false);
    });
  };

  return (
    <>
      {' '}
      {images && (
        <ul className={s.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              smallImage={image.webformatURL}
              bigImage={image.largeImageURL}
            />
          ))}
        </ul>
      )}
      {isLoading && <Spiner />}
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMoreImages}> </LoadMoreBtn>
      )}
    </>
  );
}
