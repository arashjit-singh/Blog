import { Link } from "react-router-dom";
import articles from "./article-content";

const ArticleList = () => {
  return (
    <>
      {articles.map((article) => (
        <Link
          to={`/article/${article.id}`}
          className="article-list-item"
          key={article.id}
        >
          <h3>{article.name}</h3>
          <p>{article.content[0].substring(0, 200)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ArticleList;
