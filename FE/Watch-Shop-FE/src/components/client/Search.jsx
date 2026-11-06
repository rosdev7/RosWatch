import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ handleSearch, searchTerm }) => {
  return (
    <div>
      <div className='relative text-gray-500'>
        <input
          className='border border-gray-300 bg-white h-12 pl-6 pr-14 rounded-full text-sm w-80 max-w-full transition-all focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20'
          name='search'
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Bạn muốn tìm gì?....'
        />
        <BsSearch className='absolute right-5 top-1/2 -translate-y-1/2 text-accent' />
      </div>
    </div>
  );
};

export default Search;
