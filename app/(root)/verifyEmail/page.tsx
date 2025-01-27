"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import "tailwindcss/tailwind.css";
import Wallpaper from "@/public/serviap-logistics-types-of-pallets1.jpg";
import backendUrl from "../../url.json";

const EmailVerificationPage = (params: any) => {
  const [verificationCode, setVerificationCode] = useState("");

  const verifyEmail = async () => {
    const response = await fetch(backendUrl.backendUrl + "auth/verify-email", {
      method: "POST",
      body: JSON.stringify({
        email: params.searchParams.email,
        verificationCode: verificationCode,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    if (response.status < 300 && response.status >= 200) {
      window.location.href = "/login";
    } else {
      alert(res.message);
    }
    return res;
  };

  return (
    <div className="flex justify-center items-center w-auto h-screen">
      <div className="bg-white shadow-3xl w-3/4  lg:w-[50%] lg:h-[40%]  justify-center rounded-2xl overflow-hidden grid md:grid-cols-2">
        <div className="w-auto flex">
          <Image
            src={Wallpaper}
            alt="PP"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="w-auto p-8 flex items-center justify-center flex-col">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Email Verification<span className="text-blue-500">!</span>
            </h2>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              id="verificationCode"
              className="border rounded-lg px-4 py-2"
              placeholder="Verification Code"
              onInput={(e) => setVerificationCode(e.currentTarget.value)}
            />
          </div>
          <div className="mt-8">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-8 hover:bg-blue-600 transition duration-300 ease-in-out w-full"
            onClick={verifyEmail}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
