import { useState } from 'react';

export default function SearchBar({
  onSearch
}) {
  const [keyword, setKeyword] = useState('');
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
  };

  return (
    <div className="search-container">
      <span className="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>

      <input
        type="text"
        className="search-input"
        placeholder="ドラマのタイトルを入力して Enterキーで検索..."
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}