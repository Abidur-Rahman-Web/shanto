import React from "react";
import SiteLayout from "../layout/SiteLayout";
import Profile from "../components/Profile";
import SiteNavbar from "../components/SiteNavbar";

const ProfilePage = () => {
  return (
    <div>
      <SiteLayout>
        <SiteNavbar />
        <Profile />
      </SiteLayout>
    </div>
  );
};

export default ProfilePage;
