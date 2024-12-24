//ContactForm.tsx

"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_d43o7al",
        "template_mybbwas",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "qMi-Bmqubs5mGqmsm" 
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div id="contact" className="mt-12 p-6 w-3/4 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">Looking to get in touch?</h2>
      {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm sm:text-base md:text-lg font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md text-sm sm:text-base md:text-lg text-black"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm sm:text-base md:text-lg font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md text-sm sm:text-base md:text-lg text-black"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm sm:text-base md:text-lg font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="mt-1 p-2 block w-full border rounded-md text-sm sm:text-base md:text-lg text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-300 text-white p-2 rounded-md hover:bg-custom-hover transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;