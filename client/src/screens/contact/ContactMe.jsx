import React from 'react';
import useInput from "../../useInput"
import Nav from "../../components/navagation/Nav"
import Footer from '../../components/footer/Footer'
import "./ContactMe.css";

const ContactMe = () => {
  const name = useInput("")
  const eMail = useInput("")
  const message = useInput("")

  const submitForm = (event) => {
    event.preventDefault();
    // console.log("name", name.value);
    // console.log("eMAil", eMail.value);
    // console.log("message", message.value);
};
  return (
    <div>
<Nav />
    <form className='form' onSubmit={submitForm}>
                  <h1>Contact Me</h1>

          <input placeholder="name" value={name.value} onChange={name.onChange}/>
          <input placeholder="e-mail" type="eMail" value={eMail.value} onChange={eMail.onChange}/>
          <input placeholder="message" className="message" type="message" value={message.value} onChange={message.onChange}/>
      <button className='send' type="submit">SEND</button>
      </form>
      <Footer />
      </div>
  );
};

export default ContactMe;


// Got help with this from https://designcode.io/react-hooks-handbook-useinput-hook