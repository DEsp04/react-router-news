


function BusinessList(props) { 



    return (
      <ul>
        {
          props.list.map((article) => (<li><a href={article.url}>{article.title}</a>by: {article.author}</li>))

        } 
      </ul>
    )

}

export default BusinessList;