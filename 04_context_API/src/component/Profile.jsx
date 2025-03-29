import React, { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";

const Profile = () => {
  // Context API ------------------
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto mt-10 grid gap-6 border-1 rounded-md p-10">
        No user found !
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 grid gap-6 border-1 rounded-md p-10">
      Welcome {user.name}
    </div>
  );
};

export default Profile;
