import React from 'react'
import "./SubscribePop.css"
import { Link } from 'react-router-dom'
import subscribe from "../imgs/subscribe.svg"
import Signup from './SignUp';

function SubscribePop(props) {
  return (
    <div className='popUp'>
        <div className='popup-inner'>
            <img src={subscribe} alt="subscribe icon" />
            Treat yourself to more recipes! 
            <Signup></Signup>

            <button className='close-btn' onClick={() => props.setTrigger(false)}> close </button>
            <p className='w-100 text-center mt-2'>
            Already have an account? <Link onClick={() => props.setTrigger(false)} to="/login" className='underline'> Sign in </Link> 
            </p>
        </div>
    </div>
  );
}

export default SubscribePop