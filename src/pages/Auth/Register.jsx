import React, { useState } from "react";
import Layout from "../../component/Layout/layout";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // Form Submit Function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/vi/auth/register',
        {
          name,
          email,
          password,
          phone,
          address,
          answer
        });
      
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate('/login')
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout title={"Registration Page"}>
      <div className="container">
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    <h1 style={{ fontWeight: 600 }}>Sign up</h1>
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size="lg" />

                      <MDBInput
                        label="Your Name"
                        id="form1"
                        type="text"
                        className="w-100"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size="lg" />
                      <MDBInput
                        label="Your Email"
                        id="form2"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size="lg" />
                      <MDBInput
                        label="Password"
                        id="form3"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="location me-3" size="lg" />
                      <MDBInput
                        label="Enter Address"
                        id="form4"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="phone me-3" size="lg" />
                      <MDBInput
                        label="Enter Number"
                        id="form4"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="question me-3" size="lg" />
                      <MDBInput
                        label="What is Your favorite sports ? "
                        id="form4"
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                      />
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">
                        I have an already Account ?&nbsp;
                        <Link to="/login">Login</Link>
                      </p>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg">
                      Register
                    </MDBBtn>
                  </form>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </Layout>
  );
};

export default Register;
