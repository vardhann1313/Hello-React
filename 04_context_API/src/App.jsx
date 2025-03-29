import React, { useContext } from "react";
import UserContextProvider from "../context/UserContextProvider";
import Signup from "./component/Signup";
import Profile from "./component/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <Signup />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
