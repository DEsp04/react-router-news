import axios from 'axios';
import React, { useState, useEffect } from "react";
import BitcoinList from "./BitcoinList"


const Bitcoin_URL = `${process.env.REACT_APP_NEWS_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

console.log(API_KEY);

function BitcoinNews(props) { 

  const [bitCoinsNews, setBitCoinsNews] = useState('');


  // useEffect(() => {
  //   const response = async () => {

  //     const { data } = await axios.get(`${Bitcoin_URL}/v2/everything?q=bitcoin&from=2020-12-27&sortBy=publishedAt&apiKey=${API_KEY}`);

  //   }
  //   response()
  // }, []);








  return (
    <div>
      <h1>Bitcoin News</h1>
      <BitcoinList list={props.bitcoinList} />
    </div>
  )
}

export default BitcoinNews;