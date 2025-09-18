import React from "react";

const HomeContact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('/images/formbg.png')] bg-cover bg-center py-20">
      {/* Dark Form Card */}
     {/* Card */}
      <div className="bg-[#3c2a23] text-white rounded-lg shadow-lg p-8 md:p-10 w-full max-w-lg">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-light leading-snug mb-8 text-center">
          We’re just a form away send us your <br /> question and we’ll be happy to help!
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-2 uppercase tracking-wide">Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-md bg-[#f8f4ec] text-black focus:outline-none focus:ring-2 focus:ring-[#c8b195]"
              />
            </div>
            <div>
              <label className="block text-xs mb-2 uppercase tracking-wide">Phone</label>
              <input
                type="text"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-3 rounded-md bg-[#f8f4ec] text-black focus:outline-none focus:ring-2 focus:ring-[#c8b195]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs mb-2 uppercase tracking-wide">Email</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-3 rounded-md bg-[#f8f4ec] text-black focus:outline-none focus:ring-2 focus:ring-[#c8b195]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs mb-2 uppercase tracking-wide">Message</label>
            <textarea
              placeholder="Write your message here"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-[#f8f4ec] text-black focus:outline-none focus:ring-2 focus:ring-[#c8b195]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#c8b195] text-black py-3 rounded-md hover:bg-[#b49e7d] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeContact;
