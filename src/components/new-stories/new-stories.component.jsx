import { newArticles } from "./new-stories.data"

const NewStories = () => {


  return (
    <div>

{newArticles.map(article => <div>
    <h2>{article.title}</h2>
    <p>{article.summary}</p>
</div>)}

    </div>
  )
}

export default NewStories