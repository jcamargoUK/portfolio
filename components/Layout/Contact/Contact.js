import emailjs from '@emailjs/browser';
import styles from "../../../src/styles/ContactUs.module.css"
import { useRef, useState } from 'react';

// Contact Form
function ContactForm() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_fr94leh',
      'template_u3ohpes',
      {
        to_name: "Julio",
        from_name: form.name,
        message: form.message,
      },
      'tligEdje5qeglTeZy'
    )
    .then(() => {
      setLoading(false);
      alert("Email successfully sent!");
      formRef.current.reset();
      setForm({
        name: "",
        email: "",
        message: "",
      })
      
    }, (error) => {
      setLoading(false);
      alert("An error occurred, Please try again");          
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Form</h1>
      <div className={styles.flexContainer}>
        <div className={styles.formContainer}>
          <form ref={formRef} className={styles.cf} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input className={styles.input} type='text' placeholder='Name' name='name' onChange={handleChange} />
              <input className={styles.input} type='email' placeholder='Email address' name='email' onChange={handleChange} />
            </div>
            <div>
              <textarea className={styles.textArea} name='message' type='text' placeholder='Message' onChange={handleChange}></textarea>
            </div>
            <div className={styles.submitContainer}>
              <input className={styles.submit} type='submit' value='Submit' />
            </div>
          </form>
        </div>
        <div className={styles.mapContainer}>
          {/* <h1>map goes here</h1> */}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
