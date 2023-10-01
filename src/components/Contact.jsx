import React, { useState } from "react";
import "./module.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const phoneNumber = "+923126065261"; // Your phone number in international format

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hvjxkjn",
        "template_7em6qzo",
        formData,
        "Al1uRarjj47ojbBZe"
      )
      .then((response) => {
        console.log("Email sent:", response);
        alert("Message sent successfully.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="contact w-full flex mt-10 mobile:flex-col items-center justify-center overflow-hidden">
      <div className="w-full mobile:w-full bg-black text-white h-full flex flex-col justify-center">
        <h4 className=" text-6xl mobile:text-4xl font-bold text-red-500 my-4 mx-16 mobile:mx-1">
          Want to get in touch?
        </h4>
        <h1 className="text-6xl mobile:text-4xl font-black mx-16 mobile:mx-1">
          Contact
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={8}
          stroke="currentColor"
          className=" w-14 h-14 mx-16 mobile:mx-1 relative text-white font-extrabold"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
        <form
          onSubmit={handleSubmit}
          className="w-2/5 mobile:w-full mx-16 mobile:mx-1 fex flex-col justify-center"
        >
          <div className=" flex flex-col justify-between mx-2 text-2xl mobile:mx-1">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className=" w-full bg-transparent border border-white my-3 py-3 mobile:w-11/12"
            />
          </div>
          <div className=" flex flex-col justify-between mx-2 text-2xl mobile:mx-1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className=" w-full bg-transparent border border-white my-3 py-3 mobile:w-11/12"
            />
          </div>
          <div className=" flex flex-col justify-between mx-2 text-2xl mobile:mx-1">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className=" w-full bg-transparent border border-white my-3 py-3 mobile:w-11/12"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className=" bg-orange-500 px-10 py-4 mt-4 ml-2 rounded-md text-2xl mobile:py-2 mobile:px-5 mobile:mb-8"
            >
              Send Message
            </button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className=" w-20 h-20 mt-4 text-green-600 mobile:w-10 mobile:h-10 mobile:mr-10"
              onClick={handleWhatsAppClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>
          <p className="text-xl  mx-2 mobile:mx-1 my-4">
            Sorry Email service not available at this time only whatsapp please.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
