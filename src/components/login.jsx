import React from 'react';



function Login() {
  return ( 
    <div className="login-wrapper">
      <h1>Market Place Login</h1>
      <form>
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
export default Login;