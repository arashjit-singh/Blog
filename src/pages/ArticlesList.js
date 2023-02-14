import articles from "./article-content";
import ArticleListItem from "../components/ArticleListItem";

const ArticleList = () => {
  return (
    <>
      {articles.map((article) => (
        <ArticleListItem article={article} key={article.id} />
      ))}
    </>
  );
};

export default ArticleList;
