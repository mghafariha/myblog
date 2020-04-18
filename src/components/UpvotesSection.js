import React from 'react';
const UpvotesSection=({articleName,upvotes,setArticleInfo})=>{
  const upvoteArticle=async()=>{
   const result=await fetch(`/api/articles/${articleName}/upvote`,{
       method:'post',
   })
   const body= await result.json();
   setArticleInfo(body);
  }
return(
<div>
    <button onClick={()=>upvoteArticle()}>Add vote</button>
    <p> this article is voted for {upvotes}</p>
</div>
)

}


export default UpvotesSection;