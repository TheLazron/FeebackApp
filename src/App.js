import {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedBackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {FeedbackProvider} from './components/context/FeedbackContext';
function App() {
  // console.log(FeedBackData);

  const [feedbacks, setfeedbacks]=useState(FeedBackData);

 


  return (

    <FeedbackProvider>
      <Header Text="FeedBack UI"/>
      <div className="container">
      <FeedbackForm/>
      <FeedbackStats/>
          <FeedbackList/>
      </div>
    </FeedbackProvider>
  );
}

export default App;
