import MainArticle from '../../components/main-article/main-article.component';
import NewStories from '../../components/new-stories/new-stories.component';
import TrendingArticles from '../../components/trending-articles/trending-articles.component';
import './home.styles.scss';

const Home = () => {
  return (
    <div className="home-container">
      <MainArticle/>
      <NewStories />
      <TrendingArticles  />
    </div>
  );
};

export default Home;