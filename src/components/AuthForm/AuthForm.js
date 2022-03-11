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

  const common = <><div class="form-outline form-white mb-4">
    <input
      required
      name="email"
      type="email"
      value={state.email}
      onChange={handleChange}
      id="typeEmailX"
      class="form-control form-control-lg" />
    <label class="form-label" for="typeEmailX">Email</label>
  </div>

    <div class="form-outline form-white mb-4">
      <input
        required
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
        id="typePasswordX"
        class="form-control form-control-lg" />
      <label class="form-label" for="typePasswordX">Password</label>
    </div>
  </>

  return (
    <form onSubmit={handleSubmit}>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white">
                <div class="card-body p-5 text-center">

                  <div class="mb-md-5 mt-md-4 pb-5">


                    {isSignUp && <>


                      <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                      <p class="text-white-50 mb-5">Please register in our site!</p>

                      {common}

                      <div class="form-outline form-white mb-4">
                        <input
                          required
                          name="name"
                          type="name"
                          value={state.name}
                          onChange={handleChange}
                          id="typeEmailX"
                          class="form-control form-control-lg" />
                        <label class="form-label" for="typeEmailX">Name</label>
                      </div>


                      <div class="form-outline form-white mb-4">
                        <input
                          required
                          name="phone"
                          type="phone"
                          value={state.phone}
                          onChange={handleChange}
                          id="typeEmailX"
                          class="form-control form-control-lg" />
                        <label class="form-label" for="typeEmailX">Phone</label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input
                          required
                          name="address"
                          type="address"
                          value={state.address}
                          onChange={handleChange}
                          id="typeEmailX"
                          class="form-control form-control-lg" />
                        <label class="form-label" for="typeEmailX">Address</label>
                      </div>

                      <button class="btn btn-outline-light btn-lg px-5" type="submit">{submitMessage}</button>

                    </>}


                    {!isSignUp && <><h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                      <p class="text-white-50 mb-5">Please enter your login and password!</p>

                      {common}


                      <button class="btn btn-outline-light btn-lg px-5" type="submit">{submitMessage}</button>
                    </>
                    }

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </form>


  );
}

export default AuthForm;
