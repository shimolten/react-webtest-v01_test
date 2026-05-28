import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchShowById } from '../services/tvMazeApi';
import noImage from '../assets/noImage.png';

export default function ShowDetail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  if (loading) return <div className="loading-container">読み込み中...</div>;
  if (error) return <div className="error-message"><p>{error}</p></div>;
  if (!show) return null;

  {/* 概要(summary)にはHTMLタグが含まれるためタグを除去しています */}
  const cleanSummary = show.summary
    ? show.summary.replace(/<\/?[^>]+(>|$)/g, "")
    : "このテレビ番組の概要はまだ登録されていません。";


  {/* 画像が無い場合　noImageを出力する処理を以下記載してください */}


  return (
    <>
      {/* ShowDetail.htmlを基にJSX形式で詳細画面が表示されるように実装してください。 */}
    </>
  );
}