
// import {useState} from 'react' 
import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card";
import PropTypes from 'prop-types';

function FeedBackItem({item , handledelete}) {
    // const [rating , setRating] =  useState(7);
    // const [text , setText] = useState('this is so sexy ')
    //   const handleclick = ()=> {
    //     setRating ((prev)=>{
    //      return prev + 1
    //     })

       

    //   }

    // const handledelete = () => {
    //     console.log(item.id);
    // }
      
   
  return (
   <>
     <Card >
     <div className='num-display'>{item.rating }</div>
     <button onClick={ ()=> handledelete(item.id)} className='close'>
      <FaTimes color='purple'/>
     </button>
        <div className='text-display'>{item.text}</div>
       {/* <button onClick={handleclick}>Clck </button> */}
     </Card>
        
   
   </>
   
        
    
 
  );
}
FeedBackItem.prototype = {
  item : PropTypes.object,
}

export default FeedBackItem;
