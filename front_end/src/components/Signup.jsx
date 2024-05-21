import React, { useState } from "react";


export default function Signup() {
  const [signupState, setSignupState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState(""); // État pour suivre l'erreur de validation de l'e-mail
  const [passwordError, setPasswordError] = useState(""); // État pour suivre l'erreur de validation du mot de passe
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // État pour suivre l'erreur de validation de la confirmation du mot de passe

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    createAccount();
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    let isValid = true;

    // Validation de l'e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(signupState.email)) {
      isValid = false;
      setEmailError("Please enter a valid email address."); // Définir le message d'erreur
    } else {
      setEmailError(""); // Réinitialiser le message d'erreur si l'e-mail est valide
    }

    // Validation du mot de passe
    if (signupState.password.length < 8) {
      isValid = false;
      setPasswordError("Password must be at least 8 characters long."); // Définir le message d'erreur
    } else {
      setPasswordError(""); // Réinitialiser le message d'erreur si le mot de passe est valide
    }

    // Vérification que le mot de passe et la confirmation du mot de passe sont identiques
    if (signupState.password !== signupState.confirmPassword) {
      isValid = false;
      setConfirmPasswordError("Passwords do not match."); // Définir le message d'erreur
    } else {
      setConfirmPasswordError(""); // Réinitialiser le message d'erreur si les mots de passe sont identiques
    }

    return isValid;
  };

  // Fonction pour créer un compte utilisateur
  const createAccount = () => {
    // Logique pour créer un compte utilisateur
  };

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.name]: e.target.value });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
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
        sign up
      </button>
    </form>
  );
}
