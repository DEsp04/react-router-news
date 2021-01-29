import axios from 'axios';
import React, { useState, useEffect } from "react";
import BusinessList from "./BusinessList";

//Remember to do yarn add dotenv 
//.env file be in the root, not src folder
const Business_URL = `${process.env.REACT_APP_NEWS_URL}`
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

console.log(API_KEY)

function BusinessNews(props) { 
  const [businessNews, setBusinessNews] = useState('');




  // useEffect(() => {
  //   const response = async () => {

  //     const { data } = await axios.get(`${Business_URL}/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`);

  //   }
  //   response()
  // }, []);

  console.log(props)


  return (
    <div>
      <h1>Business</h1>
      <BusinessList list={props.buisnessList} />
    </div>
  )
}

export default BusinessNews;