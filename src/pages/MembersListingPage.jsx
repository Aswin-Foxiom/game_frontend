import React, { useContext, useEffect, useState } from "react";
import { apiCall } from "../services/ApiCall";
import { SearchPartners } from "../services/Urls";
import { ContextDatas } from "../context/ContextPage";
import { useNavigate } from "react-router-dom";
import getLocationName from "../utils/LocationName";

function MembersListingPage() {
  let navigate = useNavigate();
  const { location, User } = useContext(ContextDatas);
  const [membersList, setmembersList] = useState([]);
  useEffect(() => {
    if (!User) {
      return navigate("/");
    }
    getSimilarUsers();
  }, [location]);

  const getSimilarUsers = async () => {
    if (location) {
      const response = await apiCall("post", SearchPartners, location);
      console.log(response);
      if (response.status) {
        setmembersList(response.message.data);
      }
    }
  };

  return (
    <div>
      <section className="breadcrumb-area profile-bc-area">
        <div className="container">
          <div className="content">
            <h2 className="title extra-padding">Partners Near You</h2>
          </div>
        </div>
      </section>

      <section className="community-section inner-page">
        <div className="container">
          {/* Profile loop */}
          <div className="row">
            {membersList.length ? (
              <>
                {membersList.map((value, key) => (
                  <div className="col-lg-6" key={key}>
                    <div className="single-friend">
                      <img
                        src={
                          value.image
                            ? value.image
                            : "/assets/images/profile/friend1.png"
                        }
                        alt
                      />
                      <div className="content">
                        <a href="single-profile.html" className="name">
                          {value.name}
                          <span className="isvarify">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>

                        {value.interest.length ? (
                          <>
                            {value?.interest.map((value, key) => (
                              <p className="date" key={key}>
                                {value}
                              </p>
                            ))}
                          </>
                        ) : (
                          "Not Added"
                        )}

                        <a
                          href={`https://api.whatsapp.com/send?phone=6282805277&text=Hello , ${value.name} Welcomes You for a Coffee Date , Are you Ok , Please Click Here ${window.location.origin}/welcome/${value._id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="connnect-btn"
                        >
                          Connect
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="col-lg-12">
                <div className="single-friend">No Users Found</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MembersListingPage;
