import { createContext, useEffect, useState } from "react";
import getLocationName from "../utils/LocationName";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { apiCall } from "../services/ApiCall";
import { UserUrl } from "../services/Urls";

export const ContextDatas = createContext();

const Context = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [place, setplace] = useState(null);
  const [User, setUser] = useState(
    localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null
  );

  const isValid = (event, fun_name, setstate) => {
    const form = event.currentTarget;
    event.preventDefault();
    setstate(true);
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return false;
    } else {
      fun_name();
      return true;
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          var data = await getLocationName(latitude, longitude);

          if (User) {
            await apiCall("put", UserUrl, {
              id: User.id,
              latitude: latitude,
              longitude: longitude,
            });
          }
          setplace(data);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation(null);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
      setLocation(null);
    }
  }, [User]);

  return (
    <ContextDatas.Provider value={{ isValid, User, setUser, location, place }}>
      {children}
    </ContextDatas.Provider>
  );
};

export default Context;
