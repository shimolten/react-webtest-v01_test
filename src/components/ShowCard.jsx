import { useNavigate } from 'react-router-dom';

/**
 * 番組カードコンポーネント
 * React Router を使用して詳細画面へ遷移すること
 */
export default function ShowCard({ show }) {
  const navigate = useNavigate();

  const image =
    show.image?.medium ||
    'https://placehold.co/210x295';

  const rating =
    show.rating?.average
      ? `⭐ ${show.rating.average}`
      : '⭐ -';

  return ( 
    <>
     {/* 現在はShowDetail.htmlに遷移していますが、静的HTMLではなく、React の画面遷移を使用してください */}
    <div className="show-card" onClick={() => { window.location.href = '/ShowDetail.html';}} >
      <div className="card-image-wrapper">
        <img src={image} alt={show.name} className="card-image" />
        <div className="card-rating"> 
           {rating} 
        </div>
      </div>
      <div className="card-info">
        <h4 className="card-title">
          {show.name}
        </h4>
        <p className="card-genres">
          {show.genres?.slice(0,2).join(', ')}
        </p>
      </div>
    </div>
    </>
  );
}