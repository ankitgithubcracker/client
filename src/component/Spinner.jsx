import React, { useEffect, useState } from 'react'
import Spinner from "react-bootstrap/Spinner";
import { useLocation, useNavigate } from 'react-router-dom';

const Spinners = () => {

  const [count, setCount] = useState(5)
  const navigate = useNavigate()
  const location  = useLocation()

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue)
    }, 1000);

    count === 0 && navigate('/login', {
      state:location.pathname
    })

    return () => clearInterval(interval)

  },[count,navigate,location])

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh", gap: "10px" }}
      >
        <h1>Redirecting to you in {count} second</h1>
        <div style={{display:'flex', gap:"10px"}}>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
        </div>
      </div>
    </>
  );
}

export default Spinners
