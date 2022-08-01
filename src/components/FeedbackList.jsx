import { useContext, useEffect } from 'react';
import FeedbackContext from './context/FeedbackContext';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import { useState } from 'react';

function FeedbackList() {

    const [feedbacks, setFeedbacks] = useState([]);



    const { feedback } = useContext(FeedbackContext);
    console.log("loging feed", feedback);

    function setUpdate() {
        setFeedbacks(feedback);
    }
 
    useEffect(() => {
        setUpdate();
        // console.log(feedbacks);
    }, feedback)






    if (!feedback || feedback.length === 0) {
        return <h2>No Feedbacks recieved</h2>
    }

    return (
        <AnimatePresence>
            <div className="feedback-list">

                {/* {
    feedback.map(feedback=>{
       
            return(    <motion.div key={feedback.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0.4}}>
            <FeedbackItem rating={feedback.rating} text = {feedback.text} key={feedback.id} id={feedback.id}/>
            </motion.div>)
        })

} */}

                {feedbacks.map(e => {
                    console.log(e);
                    return (
                        <FeedbackItem rating={e.rating} text={e.text} key={e.id} id={e.id} />
                    )
                })}

            </div>
        </AnimatePresence>


    )

}

export default FeedbackList;