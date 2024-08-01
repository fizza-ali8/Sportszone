// App.js
import React from 'react';
import '../Style/Article.css';
import articles from '../Helper/articleData.js'; // Importing article data
import ArticleCard from '../components/ArticleCard.js';

function Article() { // Updated function name to PascalCase for React component convention
  return (
    <div className="articles-section">
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Article;
