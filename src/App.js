import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import './App.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = value => {
    setSearchQuery(value);
  };

  return (
    <>
      <Searchbar submitSearch={handleSubmit} />
      {searchQuery && <ImageGallery searchQueryProp={searchQuery} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
