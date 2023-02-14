import { Link } from "react-router-dom";

const ArticleListItem = ({ article }) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="article-list-item"
      key={article.id}
    >
      <h3>{article.name}</h3>
      <p>{article.content[0].substring(0, 200)}...</p>
    </Link>
  );
};

export default ArticleListItem;
