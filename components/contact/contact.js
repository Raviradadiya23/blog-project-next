import { useState } from "react";
import classes from "./contact.module.css";

function ContactForm() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [messege, setMessege] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        messege,
      }),
      headers: { "content-type": "application/json" },
    });
  };
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="test"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="messege">Your Messege</label>
          <textarea
            id="messege"
            rows="5"
            required
            value={messege}
            onChange={(e) => setMessege(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Messege</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
