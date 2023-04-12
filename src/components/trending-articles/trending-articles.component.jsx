import { trendingArticles } from "./trending-articles.data"

const TrendingArticles = () => {
  return (
    <div>{trendingArticles.map(article => <div>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
    </div>)}</div>
  )
}

export default TrendingArticles