import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { IUser } from "../types";
import { register } from "../services/Authentication.service";
import { setupUser } from "../utils/setupUser";

export default function RegisterForm() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerUser = async (): Promise<any> => {
    try {
      let loggedInUser = await register({
        names: name,
        password: userPassword,
        email: userEmail,
      });

      setupUser(loggedInUser);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign up
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign up to access your account
            </p>
          </div>
          <div className="m-7">
            <form action="">
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Names
                </label>
                <input
                  type="email"
                  name="email"
                  value={name}
                  placeholder="John Doe"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-red-100 focus:border-[#ec6448]  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={userEmail}
                  placeholder="you@company.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-red-100 focus:border-[#ec6448]  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>
              <div className="mb-6">
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  value={userPassword}
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-red-100 focus:border-[#ec6448]  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>
              <div className="mb-6">
                <button
                  type="button"
                  className="w-full px-3 py-4 text-white bg-[#ec6448] rounded-md focus:bg-[#ec6448] focus:outline-none"
                  onClick={registerUser}
                >
                  Sign in
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Already have an accout?{" "}
                <Link
                  to="/login"
                  className="text-[#ec6448] focus:outline-none focus:underline focus:text-red-100 dark: focus:border-[#ec6448]"
                >
                  Sign in
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
