import Card from "./shared/Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import {useState} from 'react'
function FeedBackForm({handleAdd}) {
    const [text , setText] = useState('')
    const[btnDisabled , setBtnDisabled] = useState(true)
    const [message , setMessage] = useState('')
    const [rating , setRating] = useState(10)
    const handlechangeinput = (e)=> {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== ' ' && text.trim().length<=10){
             setBtnDisabled (true) 
             setMessage (' Add atleast 10 characters ')
        }else {
            setBtnDisabled(false)
            setMessage(null) 

        }
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10 ){
            const newfeedback ={
                text:text , 
                rating 
            }
            handleAdd(newfeedback)
            setText('')
        }
    }
  return (
   <Card>
      <h2> How would you like your service ?</h2>
      {/* @todo - rating select component  */}
      <RatingSelect select = {(rating )=> setRating(rating)}/>
      <form  onSubmit={handleSubmit}>
        <div className="input-group">
            <input onChange={handlechangeinput} type='text' placeholder='write your review' value={text}></input>
            <Button type='submit' isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
   </Card>
  );
}

export default FeedBackForm;
