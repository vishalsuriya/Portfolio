import "../Components/FormStyle.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
function Form() {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    if (!formData.get("User_name") || !formData.get("User_email") || !formData.get("message")) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    emailjs.sendForm('service_7fo4oaa', 'template_qvgf5v9', form.current, 'RYh1q0E2vuTdDk3Gx')
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
          setErrorMessage('');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setErrorMessage('Failed to send the message. Please try again later.');
        }
      );
  };

  return (

    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
      {errorMessage && <p className="error" aria-live="polite">{errorMessage}</p>}
        <label htmlFor="user_name">Your Name</label>
        <input type="text" name="User_name" id="user_name" placeholder="Enter your name" />

        <label htmlFor="user_email">Email</label>
        <input type="email" name="User_email" id="user_email" placeholder="Enter your email" />

        <label htmlFor="user_subject">Subject</label>
        <input type="text" name="User_subject" id="user_subject" placeholder="Enter the subject" />

        <label htmlFor="message">Message</label>
        <textarea rows="6" name="message" id="message" placeholder="Type your message here"></textarea>

        <button className="btn" type="submit">{isMessageSent ? "Message Sent!" : "send"}</button>
      </form>
    </div>
  );
}

export default Form;
