import React, { useState } from "react";

import './Signup.css';
import Axios from "./Axios";

export const Signup = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    MobileNo: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "/user/signup",
        formData
      );

      console.log(" Signup Success:", response.data);
      setMessage("Signup successful ");
    } catch (error) {
      console.error(" Error:", error);
      setMessage("Signup failed. Try again ");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="Name"
          placeholder="Enter Name"
          value={formData.Name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Enter Email"
          value={formData.Email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="Password"
          placeholder="Enter Password"
          value={formData.Password}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="MobileNo"
          placeholder="Enter Mobile Number"
          value={formData.MobileNo}
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
        />

        <button type="submit">Signup</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

