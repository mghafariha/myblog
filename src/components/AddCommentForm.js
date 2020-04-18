import React ,{useState} from 'react';
const AddCommentForm=({articleName,setArticleInfo})=>{
const [userName,setUserName]=useState('');
const [commentText,setCommentText]=useState('');
    const addComment=async()=>{
        const result=await fetch(`/api/articles/${articleName}/add-comment`,{
            method:'post',
            body: JSON.stringify({username:userName,text:commentText}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const body=await result.json();
        setArticleInfo(body);
        setUserName('');
        setCommentText('');
    }
    return (<div>
        <h1>Add Comment</h1>
             <label>
                 Name:
                 <input type='text' value={userName} onChange={(event)=>setUserName(event.target.value)}/>
             </label>
             <label>
                 Comment:
                 <textarea cols='50' row='4' value={commentText} onChange={(event)=> setCommentText(event.target.value)} />
             </label>
             <button onClick={()=>addComment()}>Add Comment</button>
    </div>)
}
export default AddCommentForm;