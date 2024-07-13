import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

  const [name,setName] = useState("Hamza");
  const [email,setEmail] = useState("hamza123@gmail.com");
  const [text,setText] = useState("Hello ");

  const onSubmit = (event) => {
    event.preventDefault();
   
     setName(event.target.name.value);
     setEmail(event.target.email.value);
     setText(event.target.text.value);

    console.log({
      name,
      email,
      text,
    });

    // You can add further processing of the form data here, such as sending it to a server.
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessageDetail fontSize="24px" />} />
          <Button text="VIA CALL" icon={<MdOutlinePermPhoneMsg fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="10"/>
          </div>
          <div style={{ display:"flex", justifyContent:"end" }}>
            <Button text="SUBMIT" type="submit"></Button>
          </div>
          <div style={{ marginTop: "20px", fontSize: "16px", color: "blue" }}>
        {name && <div>Name: {name}<br /></div>}
        {email && <div>Email: {email}<br /></div>}
        {text && <div>Message: {text}<br /></div>}
      </div>
        </form>
      </div>
      <div className={styles.contactimage}>
        <img src="/images/contact.svg" alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;
