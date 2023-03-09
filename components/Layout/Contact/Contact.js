// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_fr94leh', 'template_u3ohpes', form.current, 'M2ce014ipX35qbMwx')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label><p>Name</p></label>
//       <input type="text" name="user_name" />
//       <label><p>Email</p></label>
//       <input type="email" name="user_email" />
//       <label><p>Message</p></label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

import React, { useState, useRef } from "react";
import styles from "../../../src/styles/PopUp.module.css"
import emailjs from "@emailjs/browser";

function ContactUs({ user_email, handleClose, showEmailToast }) {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fr94leh",
        "template_u3ohpes",
        form.current,
        "M2ce014ipX35qbMwx"
      )
      .then(
        (result) => {
          console.log(result.text);
          // showEmailToast(result.text, null);

          // text is email is sent succsefully?
        },
        (error) => {
          console.log(error.text);
          showEmailToast(null, error.text);
          //text if email cant be sent
        }
      );

    setSuccess(true);
    form.current.reset();
    // handleClose();
    // setTimeout(TimerHandler, 2000)
  };

  function TimerHandler() {
    setSuccess(false);
  }

  return (
    <div className={styles["form-container"]}>
      <div className={styles["header-container"]}>
        <div></div> <h2 className={styles.heading}>Contact Form</h2>
      </div>

      <form ref={form} className={styles["form"]} onSubmit={handleSubmit}>
        <label className={styles["label"]}>Name:</label>
        <input className={styles["input"]} type="text" name="name" />
        <input
          hidden={true}
          type="text"
          name="email"
          defaultValue={user_email}
        />
        <label className={styles["label"]}>Email:</label>
        <input className={styles["input"]} type="text" name="sender_email" />
        <label className={styles["label"]}>Message:</label>
        <textarea
          className={styles["input-textarea"]}
          type="text"
          name="message"
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>

      <p hidden={!success}>Email Successfully Sent</p>
    </div>
  );
}

export default ContactUs;
