import { useState } from "react";
import "./nativeforms.scss";

const NativeForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setValues((values) => ({
      ...values,
      name: e.target.value,
    }));
  };

  const handleEmailChange = (e) => {
    setValues((values) => ({
      ...values,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setValues((values) => ({
      ...values,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleNameChange}
          />
          {submitted && !values.name && (
            <span id="name-error">Please enter your name</span>
          )}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            values={values.email}
            name="email"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={values.password}
            name="password"
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div class="success-message">Success! Thank you for registering</div>
      )}
    </div>
  );
};

export default NativeForm;
