import React from "react";
import {
    BrowserRouter ,
    Routes , Route
    
  } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import AboutPage from './pages/AboutPage';
import AboutIconLink from "./components/AboutIconLink";
// import Card from './components/shared/Card'


function App() {
    const [feedback , setFeedback] = useState(FeedBackData)
    const AddFeedBack = (newfeedback)=>{
        // if(window.confirm('you want to give review ')){
            newfeedback.id = uuidv4()
       setFeedback([newfeedback ,...feedback])
        // }
       
    }
    const deletefeedback =(id)=> {
          if (window.confirm('are you sure to delete this ?')) {
            setFeedback(feedback.filter( (item)=> item.id!==id))
          }
     
    }
    return(
        
          <BrowserRouter>
          <Header  / >
          <div className="container"> 
           <Routes>
            <Route exact path='/' element={
                <>
                <FeedBackForm handleAdd = {AddFeedBack}/> 
                <FeedBackStats feedback = {feedback}/> 
                <FeedBackList feed={feedback}  
                 handledelete = {deletefeedback}/>;
                
                </>
              
          

            }></Route>
                 <Route path='/about' element={<AboutPage/>}/>
           </Routes>

     

   
 


     <AboutIconLink/>

</div>
    

         
              
         
              

          
          
        
       
        
 
    
        


   
    

    


          </BrowserRouter>
        
    )
}

export default App