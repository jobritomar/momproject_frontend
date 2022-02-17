import React from "react";

function AuthForm({ onSubmit, submitMessage, isSignUp }) {
  const [state, setState] = React.useState({ email: "", password: "", phone: "", address: "", name: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = onSubmit(state);
    if (error) {
      // if error you can do something
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        required
        name="email"
        type="email"
        value={state.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
      />
      {isSignUp && <>
        <label htmlFor="phone">Phone</label>
        <input
          required
          name="phone"
          type="phone"
          value={state.phone}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          required
          name="address"
          type="address"
          value={state.address}
          onChange={handleChange}
        />
        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          type="name"
          value={state.name}
          onChange={handleChange}
        />

      </>}
      <button type="submit">{submitMessage}</button>
    </form>
  );
}

export default AuthForm;
