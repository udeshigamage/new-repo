import React from 'react';


export default function Show_Profile() {
  return (
    <div>
        <div className='header_profile'>
            <h1>Profile</h1>
        </div>
        <div className='form_wrap'>
            <form>
                
                <label>Name :
                    <input type='text' id='name' />
                </label><br></br>
                <label>Username :
                    <input type='text' id='uname' />
                </label><br></br>
                <label>Email :
                    <input type='text' id='email' />
                </label><br></br>
                <label>Contact NO:
                    <input type='text' id='c_number' />
                </label><br></br>
                <label>Company Name:
                    <input type='text' id='company_name' />
                </label><br></br>
                
            </form>
        </div>
      
    </div>
  );
}
