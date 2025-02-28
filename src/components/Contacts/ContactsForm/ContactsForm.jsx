import Button from "../../Button/Button";
import { IoIosSend } from "react-icons/io";
import "./ContactsForm.css";
import { useState } from "react";
import emailjs from "emailjs-com";
const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } = import.meta
  .env;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleContactForm = (e) => {
    e.preventDefault();
    const newErrors = validateForm({ name, email, message });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          e.target,
          EMAILJS_USER_ID
        )
        .then((result) => {
          console.log("Message sent successfully!", result.text);
        })
        .catch((error) => {
          console.error("Error sending message:", error.text);
        });

      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleContactForm}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>
        <Button type="submit" size="large">
          <div className="btn-align-icon">
            Send Message
            <IoIosSend size={20} />
          </div>
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
