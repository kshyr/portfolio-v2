import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function EmailBox() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="">
      <label>Name</label>
      <input className="text-black" type="text" name="name" />
      <label>Email</label>
      <input className="text-black" type="email" name="email" />
      <label>Message</label>
      <textarea className="text-black" name="message" />
      <input type="submit" value="Send" className="cursor-pointer" />
    </form>
  );
}
