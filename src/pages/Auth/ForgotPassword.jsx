import Layout from "../../component/Layout/layout";
import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();



  // Form Reset Function


  const handleReset = async (e) => {
    e.preventDefault();
      console.log(email,answer,newPassword)
      try {
        const res = await axios.post("/api/vi/auth/reset-password", {
          email,
          answer,
          newPassword,
        });

        if (res && res.data.success) {
            toast.success(res.data && res.data.message);

          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong");
      }
  }

  return (
    <Layout title={"Forgot Password - Ecommerce App"}>
      <div className="container mt-3 mb-3">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol sm="6">
              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <h3
                  className="fw-normal mb-3 ps-5 fw-bold pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Reset Password
                </h3>
                <form onSubmit={handleReset}>
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
                    label="Enter Your favorite Sports"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="New Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />

                  <MDBBtn
                    className="mb-4 px-5 mx-5 w-100"
                    color="info"
                    size="lg"
                  >
                    Reset
                  </MDBBtn>
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

export default ForgotPassword;
