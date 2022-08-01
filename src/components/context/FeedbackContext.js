import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();


export const FeedbackProvider=({children})=>{

    const [feedback, setFeedback]= useState([{
        id: 1,
        text: "This is from context",
        rating: 4

    }])

    const[feedbackEdit, setFeedbackEdit]= useState({
        item:{},
        edit: false
    });

    function DeleteFeedback(id){
        console.log(id);
        if(window.confirm("Are you sure you want to delete")){
          setFeedback(feedback.filter(item=>item.id !== id))
        }
      }

      function AddFeedback(newfeedback){
        newfeedback.id=uuidv4();
        setFeedback([ newfeedback, ...feedback])
      }

      function updateFeedback(id,updItem){
        // console.log("prrr",id);
        setFeedback(feedback.map((item=>{
          
        })))
        setFeedback(feedback.map(item=>item.id===id?{id, ...updItem}:item));
        console.log("updating");
        setFeedbackEdit({
          item:{},
          edit: false
      })
      }

      function editFeedback(item){
        
        setFeedbackEdit({
            item,
            edit: true
        });
      }

    return (<FeedbackContext.Provider value={{feedback, DeleteFeedback, AddFeedback, editFeedback, feedbackEdit, updateFeedback}}>
       {children} 
    </FeedbackContext.Provider>
    )
};

export default FeedbackContext;