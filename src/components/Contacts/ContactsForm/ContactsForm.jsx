import Button from "../../Button/Button";
import { IoIosSend } from "react-icons/io";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactsForm.css";
import { toast } from "react-toastify";
import { validateForm } from "../../../utils/formValidation/formValidation";

const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const form = useRef();

  const handleContactForm = (e) => {
    e.preventDefault();
    const newErrors = validateForm({ name, email, message });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm(
          VITE_EMAILJS_SERVICE_ID,
          VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
          toast.success("Message sent successfully!");
          console.log("Message sent successfully!", result.text);
        })
        .catch((error) => {
          toast.error("Error sending message:");
          console.error("Error sending message:", error.text);
        });

      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("Form submission failed due to validation errors.");
      toast.error("Form submission failed due to validation errors.");
    }
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={handleContactForm}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="user_name"
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
            name="user_email"
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
