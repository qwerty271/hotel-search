import React from "react";
import "./Login.css";
import Form from "../Form/Form";

function Login(props) {
  return (
    <section className="login">
      <div className="cover">
        <Form formSubmit={props.formSubmit} type="login" />
      </div>
    </section>
  );
}

export default Login;
