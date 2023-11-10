import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OutletConnection from "./connection/OutletConnection";
import AuthenticationPage from "./pages/AuthenticationPage";
import ProfilePage from "./pages/ProfilePage";
import MembersListingPage from "./pages/MembersListingPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AuthenticationPage />} />
        <Route path="/" element={<OutletConnection />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="find-your-partner" element={<MembersListingPage />} />
          <Route path="welcome/:id" element={<WelcomePage />} />
        </Route>
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
