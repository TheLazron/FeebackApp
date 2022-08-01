import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackItem from "./FeedbackItem";

function FeedbackList(){



    

const {feedback}=useContext(FeedbackContext);
console.log("loging feed", feedback);
if(!feedback || feedback.length === 0){
    return <h2>No Feedbacks recieved</h2>
}


return (
        <AnimatePresence>
      <div className="feedback-list">
       
{
    feedback.map(feedback=>{
       
            return(    <motion.div key={feedback.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0.4}}>
            <FeedbackItem rating={feedback.rating} text = {feedback.text} key={feedback.id} id={feedback.id}/>
            </motion.div>)
        })

}

</div> 
</AnimatePresence>
 

)


}

export default FeedbackList;