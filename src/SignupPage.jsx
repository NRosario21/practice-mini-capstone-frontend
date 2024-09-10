import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        navigate("/login", { state: { message: "User created successfully!" } });
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="container mb-5">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          First Name:{" "}
          <input
            value={name}
            onChange={(event) => setName(event.target.value.slice(0, 20))}
            className="form-control"
            name="name"
            type="text"
          />
          Last Name:{" "}
          <input
            value={name}
            onChange={(event) => setName(event.target.value.slice(0, 20))}
            className="form-control"
            name="name"
            type="text"
          />
        </div>
        <div className="mb-3">
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div className="mb-3">
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <div className="mb-3">
          Password confirmation: <input className="form-control" name="password_confirmation" type="password" />
        </div>
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
        {/* <a className="dropdown-item" href="#">
          Signup
        </a> */}
      </form>
    </div>
  );
}
