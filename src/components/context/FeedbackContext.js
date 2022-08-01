import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([{
    id: 1,
    text: "This is from context",
    rating: 4

  }])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  function DeleteFeedback(id) {
    console.log(id);
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  function AddFeedback(newfeedback) {
    newfeedback.id = uuidv4();
    setFeedback([newfeedback, ...feedback])
  }

  function updateFeedback(id, updItem) {

    const newState = feedback.map(item => {
      if (item.id === id) {
        return {
          ...item, text: updItem.text, rating: updItem.rating
        }
      }
      return item;
    }
    )
    setFeedback(newState);

    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  // console.log("prrr",id);
  // feedback.map((e) => {

  //   if (e.id === id) {
  //     console.log("UpdateFeedback");
  // setFeedback([...feedback.filter(item => item.id !== id), updItem]);
  //   }
  // })

  // setFeedbackEdit({
  //   item: {},
  //   edit: false
  // })
  //   setFeedback(feedback.map(item=>item.id===id?{id, ...updItem}:item));
  //   console.log("updating");
  //   setFeedbackEdit({
  //     item:{},
  //     edit: false
  // })


  function editFeedback(item) {

    setFeedbackEdit({
      item,
      edit: true
    });
  }

  return (<FeedbackContext.Provider value={{ feedback, DeleteFeedback, AddFeedback, editFeedback, feedbackEdit, updateFeedback }}>
    {children}
  </FeedbackContext.Provider>
  )
};

export default FeedbackContext;