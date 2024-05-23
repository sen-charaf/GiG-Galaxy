import { axiosClient } from "@/api/axios";
import { useStateContext } from "@/context copy/ContextProvider";
import React, { useState } from "react";

export default function Login() {
  const { setCurrentToken, setCurrentUser, currentUser, currentToken } =
    useStateContext();

  const [emailError, setEmailError] = useState(""); // État pour suivre l'erreur de validation de l'e-mail
  const [passwordError, setPasswordError] = useState(""); // État pour suivre l'erreur de validation du mot de passe
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    authenticateUser();
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    let isValid = true;

    // Validation de l'e-mail
    const emailInput = document.getElementById("email-address");
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      isValid = false;
      setEmailError("Please enter a valid email address."); // Définir le message d'erreur
    } else {
      setEmailError(""); // Réinitialiser le message d'erreur si l'e-mail est valide
    }

    // Validation du mot de passe
    const passwordInput = document.getElementById("password");
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 8) {
      isValid = false;
      setPasswordError("Password must be at least 8 characters long."); // Définir le message d'erreur
    } else {
      setPasswordError(""); // Réinitialiser le message d'erreur si le mot de passe est valide
    }

    return isValid;
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    axiosClient
      .post("/login", formData)
      .then((response) => {
        if (response.status === 200) {
           const { token, user } = response.data;
        setCurrentToken(token);
        setCurrentUser(user);
        console.log(currentUser);
        console.log(currentToken);
        localStorage.setItem("token", token); 
        }else if (response.response.status === 401) {
          console.log("222ssssssss2");
          throw new Error(response.response.data.error);
        }
      })
      .catch((error) => {
        console.error(error.message);
        console.log("1111");
        setPasswordError(error.message);
       
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        <label
          htmlFor="email-address"
          className="block text-sm font-medium text-gray-700"
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
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData.email}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}{" "}
        {/* Afficher le message d'erreur si présent */}
      </div>

      <div className="-space-y-px">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          required
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Password"
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          value={formData.password}
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}{" "}
        {/* Afficher le message d'erreur si présent */}
      </div>
      <div className="flex items-center justify-between">
        <div></div>
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-blue-800 hover:text-purple-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <button
        type="submit"
        name="login"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
      >
        {" "}
        login{" "}
      </button>
    </form>
  );
}
