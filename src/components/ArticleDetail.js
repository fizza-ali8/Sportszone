// components/ArticleDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../Helper/articleData.js';
import '../Style/ArticleDetail.css';

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-detail">
      <div className="article-detail-header">
        <h1>{article.title}</h1>
        <p className="author">by {article.author}</p>
      </div>
      <div className="article-detail-content">
        <div className="article-image">
          <img src={article.imageUrl} alt={article.title} />
        </div>
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default ArticleDetail;
