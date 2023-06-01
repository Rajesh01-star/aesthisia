"use client"
import React, { useState } from "react";

export default function FormSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="formContainer h-3/4 w-full px-10 flex flex-col justify-center items-center box-border mr-6">
      <div className="h-[10rem] flex flex-col justify-center items-center">
        <img src="/petals.png" className="w-[4rem]" />
        <h3 className="text-2xl sm:text-3xl">Welcome <span>Back!</span></h3>
        <p className="text-md">Glad to see you, Again!</p>
      </div>
      <div className="h-[20rem] w-[30rem] py-8">
        <form className="flex flex-col h-[20rem] gap-y-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-[4rem] sm:h-[3.5rem] border-2 border-gray-400 rounded-lg w-full p-4"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="h-[4rem] sm:h-[3.5rem] border-2 border-gray-400 rounded-lg w-full p-4"
          />
          <button className="h-[4rem] sm:h-[3.5rem] w-full bg-black text-white rounded-lg mt-6 text-xl shadow-2xl shadow-gray-400">
            Log in
          </button>
        </form>
      </div>
      <div className="h-[5rem] mt-10 text-gray-500">
        Don't have an account yet?{" "}
        <span className="text-teal-600">Sign up</span>
      </div>
    </div>
  );
}
