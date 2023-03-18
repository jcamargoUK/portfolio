// import emailjs from '@emailjs/browser';
// import styles from "../../../src/styles/ContactUs.module.css"
// import { useRef, useState } from 'react';
// emailjs.init("tligEdje5qeglTeZy")

// function ContactForm() {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.send(
//         // process.env.REACT_APP_SERVICE_ID,
//         'service_fr94leh',

//         // process.env.REACT_APP_TEMPLATE_ID,
//         'template_u3ohpes',
//         {
//           from_name: form.name,
//           to_name: "Julio",
//           from_email: form.email,
//           to_email: " jcamargo1975@gmail.com",
//           message: form.message,
//         },
//         'tligEdje5qeglTeZy',
//       )
//       .then(() => {
//           setLoading(false);
//           alert("Email successfully sent!");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           })
//         }, (error) => {
//           setLoading(false);
//           alert("An error occurred, Please try again");          
//         });
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.h1}>Contact Form</h1>
//       <div className={styles.flexContainer}>
//         <div className={styles.formContainer}>
//           <form ref={formRef} className={styles.cf} onSubmit={handleSubmit}>
//             <div className={styles.inputContainer}>
//               <input className={styles.input} type='text' placeholder='Name' name='user_name' onChange={handleChange} />
//               <input className={styles.input} type='email' placeholder='Email address' name='user_email' onChange={handleChange} />
//             </div>
//             <div>
//               <textarea className={styles.textArea} name='message' type='text' placeholder='Message' onChange={handleChange}></textarea>
//             </div>
//             <div className={styles.submitContainer}>
//               <input className={styles.submit} type='Submit' value='Submit' />
//             </div>
//           </form>
//         </div>
//         <div className={styles.mapContainer}>
//           {/* <h1>map goes here</h1> */}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ContactForm;



import { useState } from 'react';
import emailjs from '@emailjs/browser';

function EmailJSContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Send the email using EmailJS
    emailjs
      .sendForm(
        'service_fr94leh',
        'template_u3ohpes',
        e.target,
        'tligEdje5qeglTeZy'
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setLoading(false);
        console.error('Failed to send email. Error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      {loading ? (
        <p>Sending...</p>
      ) : success ? (
        <p>Email sent successfully!</p>
      ) : (
        <button type="submit">Send Email</button>
      )}
    </form>
  );
}

export default EmailJSContactForm;
