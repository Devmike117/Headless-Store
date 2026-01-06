import { useState } from 'react';
import { HiSearch, HiX } from 'react-icons/hi';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <div
        className={`flex items-center bg-gray-100 rounded-full px-4 py-2 transition-all ${
          isFocused ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <HiSearch className="text-gray-400 text-xl mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Buscar juegos, software..."
          className="flex-1 bg-transparent outline-none text-black placeholder-gray-400"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="text-gray-400 hover:text-gray-600 ml-2"
          >
            <HiX className="text-xl" />
          </button>
        )}
      </div>
    </form>
  );
};
