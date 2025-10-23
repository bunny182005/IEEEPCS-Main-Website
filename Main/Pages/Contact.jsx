import React from 'react';
import Footer from '../Components/Footer.jsx'; // Make sure the path is correct

// import Nav from '../Components/Nav.jsx'; // You would import your Nav component here

const Contact = () => {
  return (
    // 1. THIS IS THE MAIN CHANGE:
    //    - Replaced 'flex flex-col h-screen' with 'fixed inset-0'.
    //    - This makes the entire component a rigid, full-screen overlay that
    //      does not scroll, exactly like your Home component.
    <div className="fixed inset-0 bg-white overflow-hidden">
      
      
      {/* You would place your navigation component here, e.g., <Nav /> */}

      {/* Main Content Area */}
      {/* 'h-full' ensures this container takes up the screen height so we can
          vertically center the content with 'items-center'. */}
      <div className="h-full flex items-center justify-start p-8 md:p-16">
        
        {/* Form Container (No changes from your original code) */}
        {/* Added z-10 to ensure it sits above any potential background elements */}
        <div className="w-full max-w-lg ml-72 bg-white p-8 rounded-2xl border border-gray-200 z-10">
          <h1 className="text-5xl font-bold text-black mb-10">
            Contact Us
          </h1>

          <form className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your name..."
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 text-black placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-base"
              />
            </div>

            {/* Email Address Input */}
            <div>
              <label htmlFor="emailAddress" className="block text-gray-700 text-sm font-medium mb-2">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                placeholder="Enter your email..."
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 text-black placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-base"
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message..."
                rows="5"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 text-black placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-base resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-black focus:ring-opacity-50 transition-all duration-300 text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        
        {/* Image (No changes from your original code) */}
        <div className='ml-32 mb-2.5'>
          <img src="/trail.png" alt="Contact Illustration" className="w-96 h-96 ml-20 mt-10"/>
        </div>
      </div>

      {/* 2. To keep the footer visible in a 'fixed' layout, we position it
          absolutely at the bottom of the screen. */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;