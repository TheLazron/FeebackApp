import { useState, useContext, useEffect } from "react";
import Card from './shared/Card';
import Rating from './RatingSelect';
import Button from './shared/Button';
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');


    const { AddFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        setBtnDisabled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating);
    }, [feedbackEdit])

    const handleTextChange = (e) => {

        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        }
        else if (text !== '' && text?.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Feedback shoul be atleast 10 characters long');
        }
        else {
            setBtnDisabled(false);
            setMessage(null);
        }



        console.log(e.target.value);
        setText(e.target.value);
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            console.log(newFeedback);
            if (feedbackEdit.edit === true) {
                console.log("update1");
                console.log("Reeeee", feedbackEdit.item.id);
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                AddFeedback(newFeedback);
                console.log("create1");
            }


            setText('');
        }

    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your services with us?</h2>
                <Rating select={(rating) => { setRating(rating) }} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                    <Button isDisabled={btnDisabled} type="submit">Send</Button>
                </div>
            </form>
            {message && <div className="message">{message}</div>}
        </Card>
    )

}


export default FeedbackForm;


