

function BitcoinList (props) { 


  console.log(props.list.articles);

  return (
    <ul>
      {
        props.list.map((article) => { 
          return <li><a href={article.url}>{article.title}</a> by: {article.author}</li>
        })
      }
    </ul>
  )
}


export default BitcoinList;