import { useNavigate } from 'react-router-dom';

export default function HeroBanner({ show }) {
  const navigate = useNavigate();
  
  if (!show) return null;
  const image = show.image?.original ||show.image?.medium;
  const summary = show.summary
    ? show.summary.replace(
        /<\/?[^>]+(>|$)/g,
        ''
      )
    : '概要なし';

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="hero-gradient" />
      <div className="hero-content">
        <span className="hero-badge">
          TV Show
        </span>

        <h2 className="hero-title">
          {show.name}
        </h2>

        <p className="hero-summary"> {summary} </p>
        <div className="hero-buttons">
          <button class="btn btn-secondary" onClick={() => {window.location.href = '/ShowDetail.html';}}>ⓘ 詳細情報</button>
        </div>
      </div>
    </section>
  );
}