import axios from 'axios';

const ImageFinder = {
  apiKey: '18800826-dac8e8a4f07b5aa1d9a1979b8',
  baseUrl: 'https://pixabay.com/api/',
};

const getGalleryData = (searchQuery, page) => {
  const apiUrl = `${ImageFinder.baseUrl}?key=${ImageFinder.apiKey}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(apiUrl).then(response => response.data);
};

const apiRes = {
  getGalleryData,
};

export default apiRes;
