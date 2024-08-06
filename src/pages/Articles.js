// Articles.js
import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import articles from '../Helper/articleData';
import '../Style/Article.css';

function ArticleList() {
  return (
    <div className="articles-section">
      <div className="article-list">
        {articles.map((article) => (
          <Link key={article.id} to={`/articles/${article.id}`} className="article-link">
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
