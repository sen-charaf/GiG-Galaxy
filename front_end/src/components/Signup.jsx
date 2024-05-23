import { axiosClient } from "@/api/axios";
import React, { useState } from "react";

export default function Signup() {
  const [signupState, setSignupState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    gender: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    createAccount();
  };

  const validateForm = () => {
    let isValid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(signupState.email)) {
      isValid = false;
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    // Password validation
    if (signupState.password.length < 8) {
      isValid = false;
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }

    // Confirm password validation
    if (signupState.password !== signupState.confirmPassword) {
      isValid = false;
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }

    // Birthday validation
    const today = new Date();
    const birthDate = new Date(signupState.birthday);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (
      age < 18 ||
      (age === 18 && monthDiff < 0) ||
      (age === 18 && monthDiff === 0 && dayDiff < 0)
    ) {
      isValid = false;
      setBirthdayError("You must be at least 18 years old.");
    } else {
      setBirthdayError("");
    }

    return isValid;
  };

  const createAccount = () => {
    const formData = {
      name: signupState.username,
      password: signupState.password,
      password_confirmation: signupState.confirmPassword,
      email: signupState.email,
      birth_date: signupState.birthday,
      gender: signupState.gender === "male" ? "M" : "F",
    };
    axiosClient
      .post("/singup", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.name]: e.target.value });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="username"
          required
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Username"
          onChange={handleChange}
          value={signupState.username}
        />

        <label
          htmlFor="birthday"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Birthday
        </label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          required
          className="mt-1 p-2 border rounded-md w-full"
          onChange={handleChange}
          value={signupState.birthday}
        />
        {birthdayError && <p className="text-red-500">{birthdayError}</p>}

        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Gender
        </label>
        <select
          name="gender"
          id="gender"
          required
          className="mt-1 p-2 border rounded-md w-full"
          onChange={handleChange}
          value={signupState.gender}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label
          htmlFor="email-address"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email-address"
          autoComplete="email"
          required
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Email address"
          onChange={handleChange}
          value={signupState.email}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}

        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="new-password"
          required
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Password"
          onChange={handleChange}
          value={signupState.password}
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}

        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          autoComplete="new-password"
          required
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={signupState.confirmPassword}
        />
        {confirmPasswordError && (
          <p className="text-red-500">{confirmPasswordError}</p>
        )}
      </div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
      >
        Sing Up
      </button>
    </form>
  );
}
