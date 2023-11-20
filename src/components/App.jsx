import './App.css';
import { SearchBar } from './SearchBar';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader/Loader';
import { fetchPhotos, LIMIT } from '../utlils/pixabayAPI/pixabayApi';
import { useState, useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const getQuery = event => {
    event.preventDefault();
    const searchKeyWord = event.target.elements.search.value;
    if (searchKeyWord !== searchQuery) {
      setSearchQuery(searchKeyWord);
      setCurrentPage(1);
      setImages([]);
    }
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      fetchData();
    }
  }, [searchQuery, currentPage]);

  // componentDidUpdate(prevProps, prevState) {
  //   const { searchQuery, currentPage } = this.state;

  //   if (
  //     searchQuery !== prevState.searchQuery ||
  //     currentPage !== prevState.currentPage
  //   ) {
  //     this.fetchData();
  //   }
  // }

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetchPhotos(searchQuery, currentPage);
      const newImages = response.hits;
      const totalPagesOfImages = Math.ceil(response.totalHits / LIMIT);

      setImages([...images, ...newImages]);
      setTotalPages(totalPagesOfImages);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchBar getQuery={getQuery} />
      {images.length !== 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length !== 0 && currentPage !== totalPages && (
        <Button incrementPage={incrementPage} />
      )}
    </div>
  );
};

export default App;
