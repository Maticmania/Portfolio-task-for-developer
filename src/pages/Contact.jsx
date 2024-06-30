import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          'SERVICE_ID', //  EmailJS service ID
          'TEMPLATE_ID', // EmailJS template ID
          formData,
          'USER_ID' //  EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="flex items-center justify-center py-16 px-4 xl:px-0" id='contact'>
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-4">Get In Touch</h2>
        <h2 className="text-5xl font-bold text-center mb-4">Contact me</h2>
        <p className="text-center text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {isSubmitted ? (
          <p className="text-center text-green-500">Message sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="w-full p-3 border border-gray-300 rounded min-h-[220px] max-h-[240px]"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="terms"
                required
                className="mr-2"
              />
              <label className="text-gray-700">I accept the terms</label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5E3BEE] text-white p-5 rounded"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
