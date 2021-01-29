

function BitcoinList (props) { 


  console.log(props.list.articles);

  return (
    <ul>
      {
        props.list.map((article) => { 
          return <li><a href={article.url}>{article.title}</a> <span>by: {article.author}</span></li>
        })
      }
    </ul>
  )
}


export default BitcoinList;