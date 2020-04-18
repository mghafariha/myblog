import React from 'react';
import {Link} from 'react-router-dom';
const ArticleList=({articles})=>(
    <>
    {articles.map((para,key)=>(<Link key={key} to={`/article/${para.name}`}><h1>{para.name}</h1><p>{para.content[0].substring(0,10)}...</p></Link>))} 
  </>
  );

export default ArticleList;