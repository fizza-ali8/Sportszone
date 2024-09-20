// ArticleCard.js
import React from 'react';
import '../Style/ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-content">
        <div className="article-header">
          <div className="author">{article.author}</div>
          <h2>{article.title}</h2>
        </div>
        <p>{article.content}</p>
      </div>
      <div className="article-image">
        <img src={article.imageUrl} alt="Article" />
      </div>
    </div>
  );
};

export default ArticleCard;
