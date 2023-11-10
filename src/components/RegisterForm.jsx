import React, { useContext, useState } from "react";

import Filestack from "../services/Filestack";
import { ContextDatas } from "../context/ContextPage";
import { Form } from "react-bootstrap";
import { apiCall } from "../services/ApiCall";
import { UserUrl } from "../services/Urls";
import Select from "react-select";
import { ShowToast } from "../utils/Toast";

const options = [
  { value: "Cooking", label: "Cooking " },
  { value: "Singing", label: "Singing" },
  { value: "Reading", label: "Reading" },
  { value: "Running", label: "Running" },
  { value: "Travelling", label: "Travelling " },
  { value: "Swimming", label: "Swimming" },
  { value: "Dancing", label: "Dancing" },
  { value: "Drawing", label: "Drawing" },
  { value: "Painting", label: "Painting" },
  { value: "Photography", label: "Photography" },
];

function RegisterForm({ islogin, setislogin }) {
  const [regDatas, setregDatas] = useState("");
  const [validated, setvalidated] = useState(false);
  const { isValid } = useContext(ContextDatas);

  const UploadImage = async () => {
    var data = await Filestack();
    console.log(data);
    if (data) {
      setregDatas({ ...regDatas, image: data });
    }
  };

  const createProfile = async () => {
    var response = await apiCall("post", UserUrl, regDatas);
    if (response.status) {
      ShowToast("Account Created Succesfully", true);
      setregDatas("");
      setislogin(!islogin);
    }
  };

  const changed_values = (options) => {
    console.log(options);
    var selected_data = [];
    options.forEach((element) => {
      selected_data.push(element.value);
    });
    setregDatas({ ...regDatas, interest: selected_data });
  };

  return (
    <div>
      <div className="row justify-content-end">
        <div className="image"></div>
        <div className="col-lg-7">
          <div className="log-reg-inner">
            <div
              className="section-header inloginp"
              style={{ paddingTop: "0px" }}
            >
              <h2 className="title">Welcome to Sip & Spark</h2>
              <p>
                Let's create your profile! Just fill in the fields below, and
                we’ll get a new account.
              </p>
            </div>
            <div className="main-content">
              <Form
                validated={validated}
                noValidate
                onSubmit={(e) => isValid(e, createProfile, setvalidated)}
              >
                <div className="form-group">
                  <label htmlFor>Name*</label>
                  <input
                    type="text"
                    value={regDatas?.name ?? ""}
                    required
                    onChange={(e) =>
                      setregDatas({ ...regDatas, name: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>WhatsApp Number*</label>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    value={regDatas?.phonenumber ?? ""}
                    onChange={(e) =>
                      setregDatas({ ...regDatas, phonenumber: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter Your Whatsapp number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Birthday*</label>
                  <input
                    type="date"
                    required
                    max={new Date().toISOString().split("T")[0]}
                    value={regDatas?.dob ?? ""}
                    onChange={(e) =>
                      setregDatas({ ...regDatas, dob: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Interests </label>
                  {/* <input
                    type="text"
                    required
                    value={regDatas?.interest ?? ""}
                    onChange={(e) =>
                      setregDatas({ ...regDatas, interest: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter Your Interests"
                  /> */}
                  <Select
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    required
                    onChange={changed_values}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Image</label>
                  <div className="">
                    {/* <button
                      className="custom-button"
                      onClick={(e) => {
                        e.preventDefault();
                        UploadImage();
                      }}
                    >
                      {" "}
                      Upload{" "}
                    </button> */}
                    <img
                      src={regDatas?.image ?? "/assets/images/download.png"}
                      alt="Upload"
                      onClick={(e) => {
                        e.preventDefault();
                        UploadImage();
                      }}
                      style={{
                        width: "150px",
                        height: "150px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>

                <h4 className="content-title">Acount Details</h4>
                <div className="form-group">
                  <label htmlFor>Username*</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={regDatas?.username ?? ""}
                    onChange={(e) =>
                      setregDatas({ ...regDatas, username: e.target.value })
                    }
                    placeholder="Enter Your Username"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor>Password*</label>
                  <input
                    type="password"
                    required
                    value={regDatas?.password ?? ""}
                    onChange={(e) =>
                      setregDatas({ ...regDatas, password: e.target.value })
                    }
                    className="form-control"
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="button-wrapper" style={{ textAlign: "right" }}>
                  <button type="submit" className="custom-button">
                    Create Your Account
                  </button>
                </div>
                <div className="or">
                  <p className="or-signup">
                    You have an account?{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setislogin(!islogin);
                      }}
                    >
                      Sign In here
                    </a>{" "}
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
