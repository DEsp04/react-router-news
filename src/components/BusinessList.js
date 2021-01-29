


function BusinessList(props) { 



    return (
      <ul>
        {
          props.list.map((article) => (<li><a href={article.url}>{article.title}</a> <span>by: {article.author}</span></li>))

        } 
      </ul>
    )

}

export default BusinessList;