import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchShowById } from '../services/tvMazeApi';
import noImage from '../assets/noImage.png';

export default function ShowDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadShow = async () => {
      try {
        setLoading(true);
        const data = await fetchShowById(id);
        setShow(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadShow();
  }, [id]);

  if (loading) return <div className="loading-container">読み込み中...</div>;
  if (error) return <div className="error-message"><p>{error}</p></div>;
  if (!show) return null;

  const cleanSummary = show.summary
    ? show.summary.replace(/<\/?[^>]+(>|$)/g, "")
    : "このテレビ番組の概要はまだ登録されていません。";

  const imageUrl = show.image
    ? (show.image.original)
    : noImage;
   // : "https://placehold.co/320x480/202020/ffffff?text=No+Image";

  return (
    <div className="detail-view-container">
      {/* 戻るボタン */}
      <div className="back-nav-container">
        <button
          className="btn-back"
          onClick={() => navigate('/')}
        >
          ← ホームに戻る
        </button>
      </div>

      {/* 詳細レイアウト */}
      <div className="detail-layout">
        {/* 左側：ポスター */}
        <div className="detail-poster-wrapper">
          <img
            src={imageUrl}
            alt={show.name}
            className="detail-poster"
          />
        </div>
        {/* タイトル */}
        <div className="detail-info-pane">
          <h2 className="detail-show-title">
            {show.name}
          </h2>
          {/* 言語 */}
          <div className="detail-info-grid">
            <div className="info-item">
              <span className="info-label">言語</span>
              <span className="info-value">{show.language || "情報なし"}</span>
            </div>
          </div>
          {/* 概要 */}
          <h3 className="detail-description-title">概要</h3>
          <p className="detail-description-text">
            {cleanSummary}
          </p>
        </div>
      </div>
    </div>
  );
}