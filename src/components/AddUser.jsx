import React from "react";
import Services from "./Services";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import './AddUser.css';

export default function AddUser() {
  const [data, setData] = React.useState([]);
  const navi=useNavigate();

  function handleValues(id, value) {
    let handleData = data;
    handleData[id] = value;
    setData(handleData);
    console.log(handleData);
  }
  function submit() {
    Services.postUsers(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
        <div className="header_adduser">
        <div className="bt_h1">
        <button onClick={()=>navi("/list")}><RiArrowGoBackFill /></button></div><div className="h1_head">
        <h1>Add System User</h1></div>
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
