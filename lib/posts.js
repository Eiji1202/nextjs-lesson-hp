// エンドポイント
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
  // エンドポイントからデータを取得
  const res = await fetch(new URL(apiUrl));
  // json形式に変換
  const posts = await res.json();

  return posts;
  // {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "abc...",
  //   "body": "abc..."
  // },
  // {
  //   "userId": 1,
  //   "id": 2,
  //   "title": "abc...",
  //   "body": "abc..."
  // },

}

// idの一覧を取得する関数
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id)
      }
    };
  });
}

// idから特定の記事を取得する関数
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return {
    post,
  };
}