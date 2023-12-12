import React from "react";
import Services from "./Services";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./AddUser.css";

export default function AddUser() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
  });
  const [errors, setErrors] = React.useState({});
  const navi = useNavigate();

  function handleValues(id, value) {
    setData((prevData) => ({ ...prevData, [id]: value }));
  }

  function validateForm() {
    let newErrors = {};
    let isValid = true;

    // Simple validation for each field
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(data.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!data.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!isValidPhone(data.phone)) {
      newErrors.phone = "Invalid phone format";
      isValid = false;
    }

    if (!data.website.trim()) {
      newErrors.website = "Website is required";
      isValid = false;
    } else if (!isValidWebsite(data.website)) {
      newErrors.website = "Invalid website format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function isValidEmail(email) {
    // You can use a more complex regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    // You can use a more specific regex for phone validation
    const phoneRegex = /^\+?[0-9]{10,}$/;
    return phoneRegex.test(phone);
  }

  function isValidWebsite(website) {
    // You can use a more specific regex for website validation
    const websiteRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return websiteRegex.test(website);
  }

  function submit() {
    if (validateForm()) {
      Services.postUsers(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <div>
      <div className="header_adduser">
        <div className="bt_h1">
          <button onClick={() => navi("/list")}>
            <RiArrowGoBackFill />
          </button>
        </div>
        <div className="h1_head">
          <h1>Add System User</h1>
        </div>
      </div>
      <div className="form_wrap">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={(e) => handleValues(e.target.id, e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@mail.com"
            onChange={(e) => handleValues(e.target.id, e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => handleValues(e.target.id, e.target.value)}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+94xxxxxxxxx"
            onChange={(e) => handleValues(e.target.id, e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            type="text"
            name="website"
            id="website"
            placeholder="example.com"
            onChange={(e) => handleValues(e.target.id, e.target.value)}
          />
          {errors.website && <span className="error">{errors.website}</span>}
        </div>

        <div>
          <button type="button" onClick={() => submit()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
