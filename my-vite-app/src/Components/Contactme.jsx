import React from 'react';

const ContactMe = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded-lg" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded-lg" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg" id="message" rows="5"></textarea>
        </div>
        <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
      </form>
      <div className="text-center mt-10">
        <a href="https://www.linkedin.com/in/syed-mustafa-nadeem-6ab63a187/" className="text-gray-500 hover:text-blue-700 mx-2">LinkedIn</a>
        <a href="https://www.github.com/syedmustafan " className="text-gray-500 hover:text-blue-700 mx-2">GitHub</a>
        {/* Add more social links as needed */}
      </div>
    </div>
  );
};

export default ContactMe;
