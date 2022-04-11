import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <nav>
        <Link to="/signup">Signup</Link> |{" "}
        
      </nav>
    </div>
  );
}
export default Login;