import React,{useState,useEffect} from 'react';
import articles from './Article-Content';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/commentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';
const ArticlePage=({match})=>{
   const name=match.params.name;
const article=articles.find(a=>a.name==match.params.name);
const otherArticles=articles.filter(ar=>(ar.name!=match.params.name))

const [articleInfo,setArticleInfo]= useState({upVotes:0,comments:[]})
useEffect(()=>{
   const fetchData=async ()=>{
      const result= await fetch(`/api/articles/${name}`)
      const body=await result.json();
      console.log('body',body);
      setArticleInfo(body);
   }
   fetchData();
  
},[name])
   // const name=match.params.name
if(!article) return <NotFoundPage/>
else
    return(
        <>
       
        <h1>Article  {article.title}</h1>
        <h2>{article.name}</h2>
          {article.content.map((para,key)=>(<p key={key}>{para}</p>))}
          <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
         <CommentsList comments={articleInfo.comments} />
         <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
             <h1>Other Articles</h1>  
             <ArticlesList articles={otherArticles}  />  
       </>
    )
}
export default ArticlePage;