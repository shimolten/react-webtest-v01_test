import { useEffect, useState } from 'react';

import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import ShowGrid from '../components/ShowGrid';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import { fetchPopularShows,searchShows} from '../services/tvMazeApi';

/**
 * ホーム画面
 *
 * 人気TV番組の一覧表示、
 * 番組検索、
 * Heroバナー表示を行う。
 */
export default function Home() {
  const [shows, setShows] = useState([]);
  const [heroShow, setHeroShow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('人気のTV番組');

  useEffect(() => { loadPopularShows();}, []);

  const loadPopularShows = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchPopularShows();
      setShows(data);
      setHeroShow(data[0]);
      setTitle('人気のTV番組');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      loadPopularShows();
      return;
    }
    try {
      setLoading(true);
      setError('');
      const data = await searchShows(query);
      setShows(data);
      if (data.length > 0) {
        setHeroShow(data[0]);
      }
      setTitle(`「${query}」の検索結果`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {heroShow && (  <HeroBanner show={heroShow} /> )}

      <main className="content">
        <h2>{title}</h2>
        {error && ( <ErrorMessage message={error} /> )}
        {loading ? (   <LoadingSkeleton /> ) 
        : (
          <ShowGrid
            shows={shows}
            onSelect={setHeroShow}
          />
        )}
      </main>
    </div>
  );
}