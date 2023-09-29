import { useFetcher, useLoaderData } from "react-router-dom"
import Article from "./Article";
const Articles = () => {
  const articles: any = useLoaderData();
  const fetcher = useFetcher()
  return (
    <>
    <fetcher.Form action="/add/article" method="POST">
        <label htmlFor="add-article">Titre</label>
        <input type='text' name='article_title' id="add-article" />
        <input type="submit" value="Ajouter un article"/>
    </fetcher.Form>
      <h2>Liste des articles</h2>
      <div className="articles">
      {articles.map((article: any) => <Article key={article.id} article={article} />)}
      </div>
    </>
  );
}

export default Articles;