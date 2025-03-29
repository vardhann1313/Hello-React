import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Context API ------------------
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !pass) {
      prompt("All fields are required !");
      return;
    }

    const data = {
      name: name,
      email: email,
      pass: pass,
    };

    setUser(data);
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 grid gap-6 border-1 rounded-md py-10">
      <h1 className="text-center font-semibold text-4xl underline">
        Signup form
      </h1>
      <form>
        <div className="flex flex-col gap-4 mx-auto p-4 w-[60%]">
          <input
            type="text"
            className="border-1 border-gray-400 w-full p-2 rounded-md hover:border-black"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            className="border-1 border-gray-400 w-full p-2 rounded-md hover:border-black"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="password"
            className="border-1 border-gray-400 w-full p-2 rounded-md hover:border-black"
            placeholder="Enter your password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button
            className="border-2 border-indigo-600 w-full rounded-md p-2 text-indigo-600 hover:text-white hover:bg-indigo-600"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;