


function BusinessList(props) { 

  console.log(props.list.articles)

  return (
    <ul>
      {
        props.list.articles.map((article) => (<li><a href={article.url }>{article.title}</a></li>))
      }
    </ul>
  )



}

export default BusinessList;