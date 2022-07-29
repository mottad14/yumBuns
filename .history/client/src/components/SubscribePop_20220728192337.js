import React from 'react'
import "./SubscribePop.css"
import subscribe from "../imgs/subscribe.svg"
import Signup from './SignUp';

function SubscribePop(props) {
  return (props.trigger) ? (
    <div className='popUp'>
        <div className='popup-inner'>
            <img src={subscribe} alt="subscribe icon" />
            Enjoying the delicious treats? 
            <h3>Subscribe for more recipes!</h3>
            {/* <Signup></Signup> */}

            <button className='close-btn' onClick={() => props.setTrigger(false)}> close </button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default SubscribePop