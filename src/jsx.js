//   learnt part of jsx 

// 1. dynamic value and list 
// 2. conditional loops 


function App() {
    const title = 'blog post' 
     const body = 'this is my first post '

     const comments = [
        {id :1  , text:'good'},
        {id :2 , text:'sexy'},
        {id:3 , text:'supercool'}
     ]
     
     const loading = false 
     const showcomment = true

     const commentblock = (<div className="comments">
     <h1>Comments({comments.length})</h1>
    <ul>
     {comments.map((index)=>(
         <li key={index}>{index.text}</li>
     ))}
    </ul>
        
   </div>)

     if (loading ) return ('loading ')
    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
           
            <p>{body}</p>

            {showcomment && commentblock }
          
            
        </div>
      
        
    )
}

export default App