import React from 'react'
import MainArticle from '../../components/main-article/main-article.component'
import NewStories from '../../components/new-stories/new-stories.component'
import TrendingArticles from '../../components/trending-articles/trending-articles.component'

const Home = () => {
  return (
    <div>
        <MainArticle/>
        <NewStories/>
        <TrendingArticles/>
    </div>
  )
}

export default Home