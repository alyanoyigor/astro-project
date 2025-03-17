import { useState } from 'react';
import type { ArticleResponse } from '../interfaces/blog';
import Article from './Article';

function Articles({ initialArticles }: { initialArticles: ArticleResponse[] }) {
  const [articles, setArticles] = useState(initialArticles);
  const [lastIndex, setLastIndex] = useState(initialArticles.length);

  async function fetchMoreArticles() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const allArticles = await response.json();

    setArticles([...articles, ...allArticles.slice(lastIndex, lastIndex + 3)]);
    setLastIndex(lastIndex + 3);
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.length > 0 &&
          articles.map((article: ArticleResponse) => (
            <Article
              key={article.id}
              title={article.title}
              description={article.body}
            />
          ))}
      </div>

      <button
        className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
        onClick={fetchMoreArticles}
      >
        Show more
      </button>
    </>
  );
}

export default Articles;
