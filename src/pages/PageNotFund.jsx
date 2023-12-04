import React from "react";
import Layout from "../component/Layout/layout";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const PageNotFund = () => {
  return (
    <Layout title={"Go back-Page Not Found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/">
          <Button variant="outlined" color="success">
            Go Back
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFund;
