import ShowCard from './ShowCard';
import LoadingSkeleton from './LoadingSkeleton';

/**
 * TV番組一覧表示コンポーネント
 *
 * shows 配列を受け取り、
 * ShowCard コンポーネントを用いて一覧表示する。
 */
export default function ShowGrid({
  shows,
  loading,
  title,
  resultCount
}) {
  return (
    <div className="main-container">
      <div className="section-header">
        <h3 className="section-title">
          {title}
        </h3>
      </div>

      <div className="shows-grid">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          shows.map((show) => (
            <ShowCard
              key={show.id}
              show={show}
            />
          ))
        )}
      </div>
    </div>
  );
}