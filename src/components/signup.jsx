import React from 'react';

function Signup() {
  return (
    <div className="signup-wrapper">
      <h1>Market Place Login</h1>
      <form>
        <label>
          <p>Name</p>
          <input type="text"/>
        </label>
      <label>
        <p>Email</p>
        <input type="email" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}
export default Signup;