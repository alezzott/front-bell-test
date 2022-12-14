import { useState } from 'react';
import { CardProps } from '../models/PageModel';
import { User } from '../models/UserModel';

import { Card } from './Card';

export function InputSearch({ data, currentPosts }: CardProps) {
  const [isSearch, setIsSearch] = useState<string>('');

  const replaced = isSearch.split(' ').join('-');

  const filtered = currentPosts.filter(({ name }: User) => {
    return (
      name.first.toLowerCase().trim().includes(isSearch) ||
      name.last.toLowerCase().trim().includes(isSearch)
    );
  });

  return (
    <div className="grid grid-cols-1 m/t-5 m-4 items-end">
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            autoComplete="off"
            onChange={(e) => setIsSearch(e.target.value)}
            value={replaced}
            name="isSearch"
            type="text"
            className="bg-[#374151] border border-[#111827] text-white text-sm rounded-lg  focus:border-gray-500 block w-full pl-10 p-2.5  "
            placeholder="Search"
          />
        </div>
        <button
          disabled
          className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-600 rounded-lg border border-gray-500 "
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div>
        <Card data={data} currentPosts={filtered} {...setIsSearch} />
      </div>
    </div>
  );
}
