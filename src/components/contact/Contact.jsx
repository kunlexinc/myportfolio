import React from "react";

import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2qmdone",
      "template_gp0igqw",
      form.current,
      "Jsz8i5QefLzs-J7FX"
    ).then(
      res=>{
        console.log(res);
      }
    ).catch(
      err=> console.log(err)
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container conatiner contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icons" />
            <h4>Email</h4>
            <h5>kunleakintola10@gmail.com</h5>
            <a href="mailto:kunleakintola10@gmail.com">Send a message </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icons" />
            <h4>LinkedIn</h4>
            <h5>kunle Akintola1</h5>
            <a href="www.linkedin.com/in/kunleakintola">
              Check Out My Profile{" "}
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icons" />
            <h4>WhatsApp</h4>
            <h5>07068790872</h5>
            <a href="http://api.whatsapp.com/send?phone=+2347068790872">
              Send a message{" "}
            </a>
          </article>
        </div>
        <form  ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Full Name"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
