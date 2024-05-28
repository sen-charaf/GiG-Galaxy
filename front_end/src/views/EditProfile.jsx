import React, { useEffect, useState } from "react";
import "../styles/EditProfile.css";
import ServicesComponenet from "../components/ServicesComponenet";
import { useStateContext } from "@/context/ContextProvider";
import deafaultpfp from "../assets/deafaultpfp.png";
import profileIcon from "../assets/profileIcon.svg";
import profileIconHovered from "../assets/profileIcon copy.svg";
import emailIcon from "../assets/emailIcon.svg";
import emailIconHovered from "../assets/emailIcon copy.svg";
import passwordIcon from "../assets/passwordIcon.svg";
import passwordIconHovered from "../assets/passwordIcon copy.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import deleteIconHovered from "../assets/deleteIcon copy.svg";
import axios from "axios";
import { axiosClient } from "@/api/axios";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useStateContext();
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("userInfos");
  const [userName, setUserName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [newEmail, setNewEmail] = useState({ email: "", error: "" });
  const [Bio, setBio] = useState(currentUser.bio);
  const [Gender, setGender] = useState(currentUser.gender);
  const [birthday, setbirthday] = useState(currentUser.birth_date);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isEditingUserName, setIsEditingUserName] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    axiosClient
      .post("/get_current_user")
      .then((response) => {
        console.log(response);
        setCurrentUser(response.data);
        setUserName(response.data.name);
        setEmail(response.data.email);
        setBio(response.data.bio);
        setGender(response.data.gender);
        setbirthday(response.data.birth_date);
        if (response.data.image) {
          setImage(response.data.image);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  }, []);
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const formData = new FormData();
    formData.append("image", selectedImage);
    axiosClient
      .post("/update_users_info", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(selectedImage);
  };

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleEditUserNameClick = () => {
    setIsEditingUserName(true);
  };

  const handleEditBioClick = () => {
    setIsEditingBio(true);
  };

  const handleCancelUserNameClick = () => {
    setIsEditingUserName(false);
  };

  const handleCancelBioClick = () => {
    setIsEditingBio(false);
  };

  const handleSaveUserNameClick = () => {
    setIsEditingUserName(false);
    // Vous pouvez mettre ici la logique pour enregistrer les modifications du nom d'utilisateur
    axiosClient
      .post("/update_users_info", { name: userName })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSaveBioClick = () => {
    setIsEditingBio(false);
    // Vous pouvez mettre ici la logique pour enregistrer les modifications de l'e-mail
    axiosClient
      .post("/update_users_info", { bio: Bio })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailChange = (event) => {
    axiosClient
      .post("/update_email", {
        email: newEmail.email,
        current_password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setEmail(newEmail.email);
          setSelectedOption("userInfos");
          console.log("Email updated successfully");
        } else if (response.response.status === 401) {
          setPasswordError(response.response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("Error updating email");
        setNewEmail({ ...newEmail, error: error.response.data.email });
      });
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPasswordError("New password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== newPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleChangePasswordClick = () => {
    axiosClient
      .post("/update_password", {
        new_password: newPassword,
        new_password_confirmation: confirmPassword,
        current_password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          console.log("Password updated successfully");
          setSelectedOption("userInfos");
          setNewPassword("");
          setConfirmPassword("");
        } else if (response.response.status === 401) {
          setPasswordError(response.response.data.message);
        }
      })
      .catch((error) => {
        console.log(error.response.data.new_password);
        console.log("Error updating password");
        setPasswordError(error.response.data.new_password);
      });
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleDeleteAccountClick = () => {
    axiosClient
      .post("/delete_user", { password: password })
      .then((response) => {
        if (response.status === 200) {
          console.log("Account deleted successfully");
          localStorage.removeItem("token");
          navigate("/login");
        } else if (response.response.status === 401) {
          setPasswordError(response.response.data.message);
        }
      })
      .catch((error) => {
        console.log(error.response.data.password);
        console.log("Error deleting account");
        setPasswordError(error.response.data.password);
      });
  };

  return (
    <div className="  flex border space-y-4 bg-gray-50 ">
      <div className="w-1/4 profile-container bg-white ">
        <div className="relative w-full h-full flex items-center flex-col /*min-[1320px]:pt-[227px]*/">
          <div className="relative profile-img">
            <img
              src={image || deafaultpfp}
              alt="Profile Picture"
              className="rounded-full  w-32 h-32 object-cover"
            />
            <label htmlFor="image-upload">
              <img
                src="./src/assets/1021031_pen_icon.svg"
                alt="Description de l'image"
                className="h-6 w-6 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 cursor-pointer"
              />
            </label>
            <input
              type="file"
              id="image-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="ml-2 space-y-7 w-44  ">
            <div
              className={`option space-x-2 ${
                selectedOption === "userInfos" ? "selected font-semibold" : ""
              } flex`}
              onClick={() => setSelectedOption("userInfos")}
            >
              {selectedOption === "userInfos" ? (
                <img src={profileIconHovered} className="email-img" alt="" />
              ) : (
                <img src={profileIcon} className="email-img" alt="" />
              )}

              <div className="font-custom">User infos</div>
            </div>
            <div
              className={`option space-x-2 ${
                selectedOption === "changeEmail" ? "selected font-semibold" : ""
              } flex`}
              onClick={() => {
                setSelectedOption("changeEmail");
                setPassword("");
              }}
            >
              {selectedOption === "changeEmail" ? (
                <img src={emailIconHovered} alt="" className="email-img" />
              ) : (
                <img src={emailIcon} alt="" className="email-img" />
              )}
              <div className="font-custom">Change Email</div>
            </div>
            <div
              className={`option space-x-2 ${
                selectedOption === "changePassword"
                  ? "selected font-semibold"
                  : ""
              } flex`}
              onClick={() => {
                setSelectedOption("changePassword");
                setPassword("");
              }}
            >
              {selectedOption === "changePassword" ? (
                <img src={passwordIconHovered} alt="" className="email-img" />
              ) : (
                <img src={passwordIcon} alt="" className="email-img" />
              )}
              <div className="font-custom">Change Password</div>
            </div>
            <div
              className={`option space-x-2 ${
                selectedOption === "Myservices" ? "selected font-semibold" : ""
              } flex`}
              onClick={() => setSelectedOption("Myservices")}
            >
              {selectedOption === "Myservices" ? (
                <img
                  src="./src/assets/services-svgrepo-com (1).svg"
                  alt=""
                  className="email-img"
                />
              ) : (
                <img
                  src="./src/assets/services-svgrepo-com.svg"
                  alt=""
                  className="email-img"
                />
              )}
              <div className="font-custom">Myservices</div>
            </div>
            <div
              className={`option space-x-2 ${
                selectedOption === "deleteAccount"
                  ? "selected font-semibold"
                  : ""
              } flex`}
              onClick={() => {
                setSelectedOption("deleteAccount");
                setPassword("");
              }}
            >
              {selectedOption === "deleteAccount" ? (
                <img src={deleteIconHovered} alt="" className="email-img" />
              ) : (
                <img src={deleteIcon} alt="" className="email-img" />
              )}
              <div className="font-custom">Delete Account</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 content h-screen  ">
        {selectedOption === "userInfos" && (
          <div className="email-change-container">
            {" "}
            {/* Utiliser la même classe pour un style uniforme */}
            <div className="form-container">
              {" "}
              {/* Cadre et style général */}
              <h1 className="text-lg font-bold mt-20 mb-20">User Profile</h1>
              <div className="flex w-full">
                <div className="w-full mb-4">
                  <h1 className="usernametxt">Name</h1>
                  {isEditingUserName ? (
                    <div>
                      <input
                        type="text"
                        value={userName}
                        onChange={handleInputChange}
                        className="usernameinp"
                      />
                      <div className="flex mt-2">
                        <button
                          onClick={handleSaveUserNameClick}
                          className="mr-5 bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white h-fit px-6 py-2 text-base hover:border-[#fff] cursor-pointer transition"
                        >
                          Enregistrer
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex">
                      <p className="mr-5 affi">{userName}</p>
                      <button
                        onClick={handleEditUserNameClick}
                        className="bg-white  text-black border border-black px-4 py-2 h-fit rounded transition duration-200 ease-in-out hover:bg-black hover:text-white active:bg-purple-900 focus:outline-none modify-but"
                      >
                        Modify
                      </button>
                    </div>
                  )}
                </div>
                <div className="w-full mb-4">
                  <h1 className="usernametxt">email</h1>
                  <span>{email}</span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-full mb-4">
                  <h1 className="usernametxt">Bio</h1>
                  {isEditingBio ? (
                    <div>
                      <input
                        type="text"
                        value={Bio}
                        onChange={handleBioChange}
                        className="usernameinp"
                      />
                      <div className="flex mt-2">
                        <button
                          onClick={handleSaveBioClick}
                          className="mr-5 bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white h-fit px-6 py-2 text-base hover:border-[#fff] cursor-pointer transition"
                        >
                          Enregistrer
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex">
                      <p className="mr-5 affi">{Bio}</p>
                      <button
                        onClick={handleEditBioClick}
                        className=" bg-white  text-black border border-black px-4 py-2 h-fit rounded transition duration-200 ease-in-out hover:bg-black hover:text-white active:bg-purple-900 focus:outline-none modify-but"
                      >
                        Modify
                      </button>
                    </div>
                  )}
                </div>
                <div className="w-full mb-4">
                  <h1 className="usernametxt">Gender</h1>
                  <span>{Gender === "M" ? "Male" : "Female"}</span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-full mb-4">
                  <h1 className="usernametxt">Birthday</h1>
                  <span>{birthday}</span>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="px-16 py-3 h-fit bg-primary text-white rounded-lg font-bold transform hover:-translate-y-1 hover:bg-primary/80 transition duration-400">
                  Become a seller
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedOption === "changeEmail" && (
          <div className="change-container">
            <div className="form-container">
              <label htmlFor="new-email">Nouvel Email:</label>
              <input
                type="email"
                id="new-email"
                placeholder="Entrez votre nouvel email"
                value={newEmail.email} // Décommentez et définissez le state correspondant
                onChange={(e) =>
                  setNewEmail({ email: e.target.value, error: "" })
                } // Décommentez et définissez la fonction correspondante
              />
              <p className="text-red-500">{newEmail.error}</p>
              <label htmlFor="confirm-password">
                Confirmez votre Mot de Passe:
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Entrez votre mot de passe"
                value={password} // Décommentez et définissez le state correspondant
                onChange={handlePasswordChange} // Décommentez et définissez la fonction correspondante
              />
              <p className="text-red-500">{passwordError}</p>
              <div className="flex justify-center">
                <button
                  onClick={handleEmailChange}
                  className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                >
                  Modify
                </button>
              </div>
            </div>
          </div>
        )}
        {selectedOption === "Myservices" && (
          <ServicesComponenet></ServicesComponenet>
        )}

        {selectedOption === "changePassword" && (
          <div className="change-container">
            <div className="form-container">
              <label htmlFor="old-password">Old Password:</label>
              <input
                type="password"
                id="old-password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="new-password">New password:</label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
              <label htmlFor="confirm-new-password">
                Confirm New password:
              </label>
              <input
                type="password"
                id="confirm-new-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {passwordError && (
                <p className="error-message text-red-500">{passwordError}</p>
              )}
              <div className="flex justify-center">
                <button
                  className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={handleChangePasswordClick}
                >
                  Modify
                </button>
              </div>
            </div>
          </div>
        )}
        {selectedOption === "deleteAccount" && (
          <div className="change-container">
            <div className="form-container">
              <label htmlFor="password">Enter your password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
              {passwordError && (
                <p className="error-message text-red-500">{passwordError}</p>
              )}
              <label className="checkbox-container">
                <input
                  className="mr-1"
                  type="checkbox"
                  checked={isCheckboxChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark mr-1"></span>
                <h1 className="pl-10 pb-5">
                  By checking this box you confirm to delete your account
                </h1>
              </label>
              <div className="flex justify-center">
                <button
                  className={`${
                    isCheckboxChecked
                      ? "bg-red-500 hover:bg-red-700 active:bg-red-900 focus:outline-none"
                      : "bg-gray-500"
                  } text-white px-4 py-2 rounded transition duration-200 ease-in-out `}
                  onClick={handleDeleteAccountClick}
                  disabled={!isCheckboxChecked}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditProfile;
