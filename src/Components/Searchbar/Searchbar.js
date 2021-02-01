import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

export default function Searchbar({ searchQueryProp, submitSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearch = e => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleCheckSearch = e => {
    e.preventDefault();
    const checkedSearchQuery = searchQuery.trim().toLowerCase();

    if (
      checkedSearchQuery.length > 2 &&
      searchQueryProp !== checkedSearchQuery
    ) {
      submitSearch(checkedSearchQuery);
    } else {
      toast.error('Enter more letters !');
    }
  };

  return (
    <div>
      <header className={s.Searchbar}>
        <form onSubmit={e => handleCheckSearch(e)} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>
              <ImSearch />
              Search
            </span>
          </button>

          <input
            onChange={handleChangeSearch}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
}
