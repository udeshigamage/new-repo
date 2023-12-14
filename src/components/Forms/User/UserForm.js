import React from "react";

import "./UserForm.css";

export default function UserForm({onSubmit, user = undefined, readOnly = false}) {
    return (
        <form className="user-form" onSubmit={onSubmit}>
            <div className="user-form-input-container">
                <label className="user-form-label"> Name : </label>
                <input className="user-form-input" type="text" name="name" defaultValue={user ? user.name : undefined} readOnly={readOnly} />
            </div>

            <div className="user-form-input-container">
                <label className="user-form-label"> Username : </label>
                <input className="user-form-input" type="text" name="username" defaultValue={user ? user.username : undefined} readOnly={readOnly} />
            </div>
            
            <div className="user-form-input-container">
                <label className="user-form-label"> Email : </label>
                <input className="user-form-input" type="email" name="email" defaultValue={user ? user.email : undefined} readOnly={readOnly} />
            </div>

            <div className="user-form-input-container">
                <label className="user-form-label"> Contact No. : </label>
                <input className="user-form-input" type="phone"  name="contact" defaultValue={user ? user.phone : undefined} readOnly={readOnly} />
            </div>

            <div className="user-form-input-container">
                <label className="user-form-label"> Company Name : </label>
                <input className="user-form-input" type="text" name="company" defaultValue={user ? user.company.name : undefined} readOnly={readOnly} />
            </div>

            <input className="user-form-submit" type="submit" value={readOnly ? "Edit" : "Submit"} />

        </form>
    );
}