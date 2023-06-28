import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired actions with the form data (e.g., submit to a server)

    // Reset form fields
    setName("");
    setEmail("");
    setComments("");
  };

  // const emailEndpoint = `https://formspree.io/${process.env.REACT_APP_EMAIL}`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-20">
      <form
        // action={emailEndpoint}
        // method="POST"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto border-2 border-gradient-to-r-indigo from-indigo-500 via-purple-500 to-pink-500 p-4 rounded w-96"
      >
        <div className="mb-4">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Contact
          </h2>
          <label htmlFor="name" className="block mb-2 text-white">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-white p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-white">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-white p-2 rounded focus:outline-none focus:border-blue-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comments" className="block mb-2 text-white">
            Comments:
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full border border-white p-2 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          Submit
        </button>
      </form>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 sm:p-60">
        <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Contact Information
        </p>
        <ul className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          <li>andrea.anza3@gmail.com</li>
          <li>5563288837</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
