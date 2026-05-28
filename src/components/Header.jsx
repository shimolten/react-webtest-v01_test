import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';

export default function Header({ onSearch, resetToPopular}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  return (
    <nav
      className={
        scrolled
          ? 'navbar scrolled'
          : 'navbar'
      }
    >
      <div className="nav-left">
        <h1 className="nav-logo" onClick={resetToPopular}> TESTFLIX</h1>
        <ul className="nav-menu">
          <li onClick={resetToPopular}>
            ホーム
          </li>
        </ul>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}