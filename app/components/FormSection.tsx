"use client"
import React, { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";

export default function FormSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="formContainer mt-24 md:mt-0 h-full w-full px-10 flex flex-col justify-center items-center box-border overflow-hidden">
      <div className="h-[10rem] flex flex-col justify-center items-center mt-4">
        <img src="/petals.png" className="w-[4rem]" />
        <h3 className="text-2xl md:text-4xl">Welcome <span className="text-teal-600">Back!</span></h3>
        <p className="text-sm md:text-lg text-gray-500">Glad to see you, Again!</p>
      </div>
      <div className="h-[30rem] md:h-[20rem] w-[30rem] py-8">
        <form className=" flex flex-col h-[15rem] gap-y-4 px-16 md:px-6 relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-[4rem] border-2 border-gray-400 rounded-lg w-full p-4"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="h-[4rem] border-2 border-gray-400 rounded-lg w-full p-4"
            onChange={(event) => setPassword(event.target.value)}
          />
          <div
          className="absolute top-[6rem] right-20 md:right-12 text-gray-500 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <VscEye size={20} /> : <VscEyeClosed size={20} />}
        </div>
          <button className="h-[4rem] w-full bg-black text-white rounded-lg mt-6 text-xl shadow-2xl shadow-gray-400" onClick={handleSubmit}>
            Log in
          </button>
        </form>
      </div>
      <div className="h-[5rem] text-gray-500">
        Don't have an account yet?{" "}
        <span className="text-teal-600 hover:cursor-pointer">Sign up</span>
      </div>
    </div>
  );
}
