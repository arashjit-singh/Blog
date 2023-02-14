import { useParams } from "react-router";
import articles from "./article-content";
import NotFound from "./NotFoundPage";

const ArticlePage = () => {
  const { articleId } = useParams();

  const articleData = articles.find((article) => article.id == articleId);

  if (!articleData) return <NotFound />;

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
