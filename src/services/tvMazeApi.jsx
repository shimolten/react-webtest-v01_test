const BASE_URL = 'https://api.tvmaze.com';

export async function fetchPopularShows() {
  const response = await fetch(`${BASE_URL}/shows?page=1`);
  if (!response.ok) {
    throw new Error('番組の取得に失敗しました。');
  }
  const data = await response.json();
  return data.slice(0, 18);
}

export async function searchShows(query) {
  const response = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error('検索に失敗しました。');
  }
  const data = await response.json();
  return data.map((item) => item.show);
}

export async function fetchShowById(id) {
  const response = await fetch(`${BASE_URL}/shows/${id}`);
  if (!response.ok) {
    throw new Error('詳細取得に失敗しました。');
  }
  return response.json();
}