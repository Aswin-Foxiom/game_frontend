import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { useNavigate, useParams } from "react-router-dom";
import { apiCall } from "../services/ApiCall";
import { UserUrl } from "../services/Urls";
import ageCalculation from "../utils/AgeCalculation";
import { ShowToast } from "../utils/Toast";
function WelcomePage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [userData, setuserData] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      return navigate("/");
    }
    getUser();
  }, []);

  const getUser = async () => {
    const response = await apiCall("get", UserUrl, {}, { id: id });
    console.log(response);
    if (response.status) {
      setuserData(response.message.data);
    }
  };

  return (
    <div>
      <div>
        {showConfetti && <ReactConfetti width={1500} height={1500} />}

        <section className="breadcrumb-area profile-bc-area">
          <div className="container">
            <div className="content">
              <h2 className="title extra-padding">
                {userData?.name ?? ""} Invites for a Coffee , Would You Like to
                Accept ?
              </h2>
            </div>
          </div>
        </section>
        {userData ? (
          <section className="profile-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-7">
                  <div className="left-profile-area">
                    <div className="profile-about-box">
                      <div className="top-bg" />
                      <div className="p-inner-content">
                        <div className="profile-img">
                          <img
                            src={
                              userData?.image ??
                              "/assets/images/profile/profile-user.png"
                            }
                            alt
                          />
                          <div className="active-online" />
                        </div>
                        <h5 className="name">{userData?.name}</h5>
                        <ul className="p-b-meta-one">
                          <li>
                            <span>
                              {Math.floor(ageCalculation(userData.dob))} Years
                              Old
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="profile-main-content">
                    <div className="info-box" style={{ margin: 0 }}>
                      <div className="header">
                        <h4 className="title">Info</h4>
                      </div>
                      <div className="content">
                        <ul className="infolist">
                          <li>
                            <span>Name</span>
                            <span>{userData?.name}</span>
                          </li>
                          <li>
                            <span>Birthday</span>
                            <span>
                              {" "}
                              {Math.floor(ageCalculation(userData.dob))}
                            </span>
                          </li>

                          <li>
                            <span>Interest</span>
                            <span>
                              {userData.interest.length ? (
                                <>
                                  {userData?.interest.map((value, key) => (
                                    <span>{value}</span>
                                  ))}
                                </>
                              ) : (
                                "Not Added"
                              )}
                            </span>
                          </li>
                          <li>
                            <span>Phone</span>
                            <span>{userData?.phonenumber}</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around mt-10">
                      <div className="right">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                            ShowToast("Rejected Coffe Request", true);
                          }}
                          className="custom-button"
                        >
                          Reject
                        </a>
                      </div>
                      <div className="right"></div>

                      <a
                        href={`https://api.whatsapp.com/send?phone=6282805277&text=Hello , Accepted Your Request for a Coffee`}
                        target="_blank"
                        className="custom-button"
                      >
                        Accept
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default WelcomePage;
