import React, { useContext, useState } from "react";
import { apiCall } from "../services/ApiCall";
import { LoginUrl } from "../services/Urls";
import { ContextDatas } from "../context/ContextPage";
import { Form } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ShowToast } from "../utils/Toast";

function LoginForm({ islogin, setislogin }) {
  let navigate = useNavigate();
  const [logData, setlogData] = useState("");
  const { setUser, isValid } = useContext(ContextDatas);
  const [validated, setvalidated] = useState(false);

  const loginFunction = async () => {
    const response = await apiCall("post", LoginUrl, logData);
    console.log(response);
    if (response.status) {
      setUser(jwtDecode(response.message.token));
      localStorage.setItem("token", response.message.token);
      ShowToast("Login Succesfull", true);
      return navigate("/");
    }
  };
  return (
    <div className="row justify-content-end">
      <div className="image image-log"></div>
      <div className="col-lg-7">
        <div className="log-reg-inner">
          <div
            className="section-header inloginp"
            style={{ paddingTop: "0px" }}
          >
            <h2 className="title">Welcome to Sip & Spark </h2>
          </div>
          <div className="main-content inloginp">
            <Form
              validated={validated}
              noValidate
              onSubmit={(e) => isValid(e, loginFunction, setvalidated)}
            >
              <div className="form-group">
                <label htmlFor>Username *</label>
                <input
                  type="text"
                  value={logData?.username ?? ""}
                  onChange={(e) =>
                    setlogData({ ...logData, username: e.target.value })
                  }
                  className="form-control"
                  required
                  placeholder="Enter Your Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor>Password *</label>
                <input
                  type="password"
                  value={logData?.password ?? ""}
                  onChange={(e) =>
                    setlogData({ ...logData, password: e.target.value })
                  }
                  className="form-control"
                  required
                  placeholder="Enter Your Password"
                />
              </div>

              <div className="button-wrapper" style={{ textAlign: "right " }}>
                <button type="submit" className="custom-button">
                  Sign In
                </button>
              </div>
              <div className="or">
                <p className="or-signup">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setislogin(!islogin);
                    }}
                  >
                    Sign up here
                  </a>{" "}
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
