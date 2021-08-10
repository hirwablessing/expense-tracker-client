import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/Authentication.service";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (): Promise<any> => {
    try {
      let loggedInUser = await login({
        password: password,
        email: email,
      });
    } catch (error) {
      console.warn(error.message);
    }
  };

  // useEffect(() => {
  //   loginUser();
  // }, []);

  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign in
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <div className="m-7">
            <form action="">
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
                  value={email}
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
                  value={password}
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
                  onClick={loginUser}
                >
                  Sign in
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Don&#x27; an accout?{" "}
                <Link
                  to="/register"
                  className="text-[#ec6448] focus:outline-none focus:underline focus:text-red-100 dark: focus:border-[#ec6448]"
                >
                  Sign up
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
