// import {motion  ,AnimatePresence} from 'framer-motion'
import FeedBackItem from './FeedBackItem';

import PropTypes from 'prop-types';

function FeedBackList({feed , handledelete}) {

    if (!feed || feed.length === 0 ){
        return <p>No FeedBack ! </p>
    }
   
  return (
    
     <div   className='feedback-list '>
        {/* <AnimatePresence>
         */}
       {feed.map ((item)=> (
            // <motion.div 
            //  key ={item.id}
            //  initial={{opacity:0}}
            //  animate={{opacity:1}}
            //  exit={{opacity:0}}
            //  >

            
          <FeedBackItem key={item.id} item={item}
          handledelete= {handledelete}/>

       ))}
       {/* </AnimatePresence> */}
    </div>
    
    
  );
}
FeedBackList.prototype ={
    // there are two ways 
    // feed: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         id: PropTypes.number.isRequired , 
    //         rating:PropTypes.number.isRequired , 
    //         text:PropTypes.string.isRequired , 
    //     })
    // )
    feed:PropTypes.array , 
}

export default FeedBackList;
