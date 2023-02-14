import { useParams } from "react-router";
import articles from "./article-content";

const ArticlePage = () => {
  const { articleId } = useParams();

  const articleData = articles.find((article) => article.id == articleId);

  if (!articleData) return <p>No Data Found</p>;

  return (
    <>
      <h1>{articleData.title}</h1>

      {articleData.content.map((data, index) => {
        return <p key={index}>{data}</p>;
      })}
    </>
  );
};

export default ArticlePage;
