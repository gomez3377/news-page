import { newArticles } from "./new-stories.data"
import './new-stories.styles.scss'

const NewStories = () => {


  return (
    <div className="new-stories">
      <h2>New</h2>
{newArticles.map(article => <div className="new-article">
    <h4>{article.title}</h4>
    <p>{article.summary}</p>
</div>)}

    </div>
  )
}

export default NewStories