"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import backendUrl from "../../url.json";

const ResetPage = () => {
  const [email, setEmail] = useState("");

  const sendResetInstructions = async () => {
    const response = await fetch(backendUrl.backendUrl + "auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await response.json();
    console.log(res);
    if (response.status < 300 && response.status >= 200) {
      alert("Password reset instructions sent to your email.");
    } else {
      alert(res.message);
    }
    return res;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-3xl w-1/2 max-w-3xl flex rounded-3xl justify-center items-center">
        <div className="hidden md:block md:w-1/2">
          <img src="reset.jpg" alt="Reset Image" className="w-full h-full rounded-md shadow-xl" />
        </div>
        <div className="px-10 py-12 flex flex-col justify-center items-center md:flex-grow">
          <div className="mb-2 text-center">
            <h2 className="text-3xl font-bold mb-2">Reset Your Password<span className="text-blue-500">.</span></h2>
            <p className="text-sm text-gray-500">Enter the email address you used to register with.</p>
          </div>
          <input
            type="email"
            id="email"
            className="border rounded-lg px-4 py-2 mt-4 w-full"
            placeholder="Email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
          <div className="flex justify-center items-center mt-4 w-full">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 text-sm"
              onClick={sendResetInstructions}
            >
              Send Instructions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
