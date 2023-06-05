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

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto border-2 border-gradient-to-r-indigo from-indigo-500 via-purple-500 to-pink-500 p-4 rounded m-40"
    >
      <div className="mb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
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
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
