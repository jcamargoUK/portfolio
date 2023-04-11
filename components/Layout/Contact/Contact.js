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
      // process.env.NEXT_PUBLIC_PUBLIC_KEY
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
              <input className={styles.input} type='text' required placeholder='Name' name='name' onChange={handleChange} />
              <input className={styles.input} type='email' required placeholder='Email address' name='email' onChange={handleChange} />
            </div>
            <div>
              <textarea className={styles.textArea} name='message' required type='text' placeholder='Message' onChange={handleChange}></textarea>
            </div>
            <div className={styles.submitContainer}>
              <input className={styles.submit} type='submit' value='Submit' />
            </div>
          </form>
        </div>
        <div className={styles.mapContainer}>
        <iframe 
          className={styles.iFrame}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19339.78064347546!2d-0.1088386137867733!3d51.42765460513411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1679383485819!5m2!1sen!2suk" 
          // layout='fill'
          width="450" 
          height="350" 
          // style="border:0;" 
          // allowfullscreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
