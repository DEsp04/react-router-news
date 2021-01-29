

function BitcoinList (props) { 


  console.log(props.list.articles);

  return (
    <ul>
      {
        props.list.articles.map((article) => { 
          return <li><a href={article.url}>{article.title}</a></li>
        })
      }
    </ul>
  )
}


export default BitcoinList;