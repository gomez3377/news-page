import { trendingArticles } from "./trending-articles.data";
import './trending-articles.styles.scss'

const TrendingArticles = () => {
  return (
    <div className="trending-articles">
      {trendingArticles.map((article) => (
        <div>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingArticles;
