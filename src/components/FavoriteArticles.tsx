import { useState } from 'react';
import type { ArticleResponse } from '../interfaces/blog';
import Article from './Article.tsx';

export default function FavoriteArticles({
  initialArticles,
}: {
  initialArticles: ArticleResponse[];
}) {
  const [articles, setArticles] = useState<ArticleResponse[]>(initialArticles);
  
  function handleDelete(id: number) {
    setArticles(
      articles.filter((article: ArticleResponse) => article.id !== id)
    );
  }

  return (
    articles && articles.length > 0 &&
    articles.map((article: ArticleResponse) => (
      <Article
        key={article.id}
        title={article.title}
        description={article.body}
        handleDelete={() => handleDelete(article.id)}
        withDelete
      />
    ))
  );
}
