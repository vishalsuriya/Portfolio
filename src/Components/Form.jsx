
import "../Components/FormStyle.css";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
function Form  ()  {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ygnrm4l', 'template_kpr1c9e', form.current, 'nP37RKPSOyodSiur6')
      .then((result) => {
          console.log(result.text);
          setIsMessageSent(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='form'>
     {isMessageSent && <p className="sent">Message sent!</p>}
   <form ref={form} onSubmit={sendEmail}>
    <label>Your Name</label>
    <input type='text' name="User_name"></input>
    <label>Email</label>
    <input type='email' name="User_email" ></input>
    <label>subject </label>
    <input type='text' name='User_subject'></input>
    <label>Message</label>
   <textarea rows="6" name="message" placeholder='Type your message here'/>
   <button className='btn' type='submit' value="Send">Send</button>
   </form>
    </div>
  )
}

export default Form