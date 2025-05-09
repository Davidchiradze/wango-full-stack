import React, { useState } from "react";
import signIn from "../API/signIn";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signIn(email, plateNumber);
    if (data.status === "success") {
      localStorage.setItem("userId", data.userId);
      history.push("/");
    }
    // Add your authentication logic here
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="plateNumber">Plate Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="plateNumber"
                    placeholder="Plate Number"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
