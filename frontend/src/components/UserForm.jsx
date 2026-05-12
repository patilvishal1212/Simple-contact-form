import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Notification from "./Notification";   

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success", 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
  };

  const closeNotification = () => {
    setNotification({ show: false, message: "", type: "success" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!formData.name.trim()) {
      showNotification("Name is required", "error");
      return;
    }
    if (!formData.email.trim()) {
      showNotification("Email is required", "error");
      return;
    }
    if (!formData.phone_number.trim()) {
      showNotification("Phone number is required", "error");
      return;
    }
    if (!formData.message.trim()) {
      showNotification("Message is required", "error");
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/submit", formData);
      
      showNotification(response.data.message || "Form submitted successfully!", "success");

      
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    } catch (error) {
      showNotification(
        error.response?.data?.message || "Error submitting form. Please try again.",
        "error"
      );
    }
  };

  return (
    <section className="min-h-screen bg-[#F2F3EB] flex items-start justify-center pt-10 pb-10 font-['Montserrat'] relative">
      
    
      <Notification
        message={notification.show ? notification.message : ""}
        type={notification.type}
        onClose={closeNotification}
      />

      
      <div className="absolute top-6 right-6 z-40">
        <Link
          to="/users"
          className="text-[#474544] font-medium border-2 border-[#474544] px-6 py-3 rounded hover:bg-[#474544] hover:text-[#F2F3EB] transition-all duration-300"
        >
          View All Users
        </Link>
      </div>

      <div className="border-[3px] border-[#474544] max-w-3xl w-full mx-auto bg-white">
        <form onSubmit={handleSubmit} className="px-10 py-12 md:px-14">
          
          <h1 className="text-[#474544] text-4xl md:text-[32px] font-bold tracking-[7px] uppercase text-center">
            Contact Us
          </h1>
          <div className="underline mx-auto mt-3 mb-12 w-20 border-b-2 border-[#474544]"></div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-[#474544] text-[#474544] 
                             py-3 text-base font-medium tracking-wider uppercase 
                             focus:outline-none transition-all placeholder:text-[#474544]"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-[#474544] text-[#474544] 
                             py-3 text-base font-medium tracking-wider uppercase 
                             focus:outline-none transition-all placeholder:text-[#474544]"
                />
              </div>
            </div>

            <div>
              <input
                type="tel"
                name="phone_number"
                placeholder="PHONE NUMBER"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#474544] text-[#474544] 
                           py-3 text-base font-medium tracking-wider uppercase 
                           focus:outline-none transition-all placeholder:text-[#474544]"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-transparent border-b-2 border-[#474544] text-[#474544] 
                           py-3 text-base font-medium tracking-wider resize-none 
                           focus:outline-none transition-all placeholder:text-[#474544]"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="border-2 border-[#474544] text-[#474544] font-bold uppercase tracking-wider
                           px-10 py-5 text-sm hover:bg-[#474544] hover:text-[#F2F3EB] 
                           transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UserForm;