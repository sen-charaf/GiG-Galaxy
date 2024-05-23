import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: "",
  setCurrentUser: () => {},
  currentToken: null,
  setCurrentToken: () => {},
  Lang: "",
  setLang: () => {},
  saveLangHandler: () => {},
});
console.log("MyProvider rendered (current value:)");

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: null,
    image: null,
    email: null,
    bio: null,
    role: null,
    created_at: null,
    birth_date: null,
    updated_at: null,
    email_verified_at: null,
    gender: null,
  });
  const [currentToken, setCurrentToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : null);
  const [Lang, setLang] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "ENG"
  );
  const saveLangHandler = (lang) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentToken,
        setCurrentToken,
        Lang,
        setLang,
        saveLangHandler,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
