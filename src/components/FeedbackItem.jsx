import {FaTimes, FaEdit} from 'react-icons/fa';
import PropTypes from 'prop-types';
import {useState, useContext} from 'react';
import FeedbackContext from './context/FeedbackContext';
import Card from './shared/Card';

function FeedbackItem(props){
    
    const [rating, setRating] = useState(props.rating);
    const [text, setText] = useState(props.text);

    const{DeleteFeedback, editFeedback} = useContext(FeedbackContext)
    
    
    function handleClick(id){
        console.log(props);
    }

    return (
       <Card>
            <div className="num-display">{rating}</div>
            <button className="close" onClick={()=>{DeleteFeedback(props.id)}}>
                <FaTimes color="purple"/>
            </button>
            <button className="edit" onClick={()=>{editFeedback(props)}}>
             <FaEdit color="purple"/>
            </button>
            <div className="text-display">{text}</div>
        </Card>
    )


}


FeedbackItem.prototype={
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}


export default FeedbackItem;