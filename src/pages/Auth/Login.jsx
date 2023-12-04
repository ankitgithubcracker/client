import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Layout from "../../component/Layout/layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth()
  
  const navigate = useNavigate();
  const location = useLocation()

  // Form Submit Function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/vi/auth/login", {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout title={"Login Page"}>
      <div className="container mt-3 mb-3">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol sm="6">
              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <h3
                  className="fw-normal mb-3 ps-5 fw-bold pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  LogIn
                </h3>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <MDBBtn
                    className="mb-4 px-5 mx-5 w-100"
                    color="info"
                    size="lg"
                  >
                    Login
                  </MDBBtn>
                  <p className="small mb-5 pb-lg-3 ms-5 text-center">
                    <Link class=" text-muted" to="/forgot-password">
                      Forgot password?
                    </Link>
                  </p>
                  <p className="ms-5 text-center">
                    Don't have an account?&nbsp;
                    <Link to="/register" class="link-info">
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
            </MDBCol>

            <MDBCol sm="6" className="d-none d-sm-block px-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Logo"
                className="w-100"
                style={{
                  objectFit: "cover",
                  objectPosition: "left",
                  height: "100vh",
                }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  );
};

export default Login;
