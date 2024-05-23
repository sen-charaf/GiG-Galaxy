import React, { useState } from "react";
import "../styles/EditProfile.css"
import ServicesComponenet from "../components/ServicesComponenet"

function EditProfile() {
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("userInfos");

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(selectedImage);
  };
  const [userName, setUserName] = useState("Mohamed Boufous");
  const [email, setEmail] = useState("madridmohmad@gmail.com");
  const [Bio, setBio] = useState("jjf");
  const [Gender, setGender] = useState("Male");
  const [birthday, setbirthday] = useState("1/1/2001");

  const [isEditingUserName, setIsEditingUserName] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);

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
  };

  const handleSaveBioClick = () => {
    setIsEditingBio(false);
    // Vous pouvez mettre ici la logique pour enregistrer les modifications de l'e-mail
  };
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [password, setPassword] = useState("");

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDeleteAccountClick = () => {
    // Ajoutez ici la logique pour supprimer le compte
    console.log("Account deleted");
  };

  return (
    <div className="  flex border space-y-4 bg-gray-50 ">
      <div className="w-1/4 profile-container bg-white ">
        <div className="relative w-full h-full flex items-center flex-col /*min-[1320px]:pt-[227px]*/">
          <div className="relative profile-img">
            <img
              src={image || "./src/assets/IMG-20240207-WA0175.jpg"}
              alt="Profile Picture"
              className="rounded-full w-32 h-32 object-cover"
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
                <img
                  src="./src/assets/profile-svgrepo-com (1).svg"
                  className="email-img"
                  alt=""
                />
              ) : (
                <img
                  src="./src/assets/profile-svgrepo-com.svg"
                  className="email-img"
                  alt=""
                />
              )}

              <div className="font-custom">User infos</div>
            </div>
            <div
              className={`option space-x-2 ${
                selectedOption === "changeEmail" ? "selected font-semibold" : ""
              } flex`}
              onClick={() => setSelectedOption("changeEmail")}
            >
              {selectedOption === "changeEmail" ? (
                <img
                  src="./src/assets/email-1-svgrepo-com (1).svg"
                  alt=""
                  className="email-img"
                />
              ) : (
                <img
                  src="./src/assets/email-1-svgrepo-com.svg"
                  alt=""
                  className="email-img"
                />
              )}
              <div className="font-custom">Change Email</div>
            </div>
            <div
              className={`option space-x-2 ${
                selectedOption === "changePassword" ? "selected font-semibold" : ""
              } flex`}
              onClick={() => setSelectedOption("changePassword")}
            >
              {selectedOption === "changePassword" ? (
                <img
                  src="./src/assets/password-svgrepo-com (1).svg"
                  alt=""
                  className="email-img"
                />
              ) : (
                <img
                  src="./src/assets/password-svgrepo-com.svg"
                  alt=""
                  className="email-img"
                />
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
                selectedOption === "deleteAccount" ? "selected font-semibold" : ""
              } flex`}
              onClick={() => setSelectedOption("deleteAccount")}
            >
              {selectedOption === "deleteAccount" ? (
                <img
                  src="./src/assets/icons8-delete (1).svg"
                  alt=""
                  className="email-img"
                />
              ) : (
                <img
                  src="./src/assets/icons8-delete.svg"
                  alt=""
                  className="email-img"
                />
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
                        className="bg-white  text-black border border-black border-2 px-4 py-2 h-fit rounded transition duration-200 ease-in-out hover:bg-black hover:text-white active:bg-purple-900 focus:outline-none modify-but"
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
                        <button onClick={handleSaveBioClick} className="mr-5 bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white h-fit px-6 py-2 text-base hover:border-[#fff] cursor-pointer transition">
                          Enregistrer
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex">
                      <p className="mr-5 affi">{Bio}</p>
                      <button
                        onClick={handleEditBioClick}
                        className=" bg-white  text-black border border-black border-2 px-4 py-2 h-fit rounded transition duration-200 ease-in-out hover:bg-black hover:text-white active:bg-purple-900 focus:outline-none modify-but"
                      >
                        Modify
                      </button>
                    </div>
                  )}
                </div>
                <div className="w-full mb-4">
                  <h1 className="usernametxt">Gender</h1>
                  <span>{Gender}</span>
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
                // value={newEmail} // Décommentez et définissez le state correspondant
                // onChange={handleEmailChange} // Décommentez et définissez la fonction correspondante
              />
              <label htmlFor="confirm-password">
                Confirmez votre Mot de Passe:
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Entrez votre mot de passe"
                // value={password} // Décommentez et définissez le state correspondant
                // onChange={handlePasswordChange} // Décommentez et définissez la fonction correspondante
              />
               <div className="flex justify-center">
              <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
Modify
</button>
              </div>
            </div>
          </div>
        )}
        {selectedOption === "Myservices" && (
 <ServicesComponenet>
  
 </ServicesComponenet>
)}

        {selectedOption === "changePassword" && (
          <div className="change-container">
            <div className="form-container">
              <label htmlFor="old-password">Old Password:</label>
              <input type="password" id="old-password" />
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
              <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
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
                  isCheckboxChecked ? "bg-red-500 hover:bg-red-700 active:bg-red-900 focus:outline-none" : "bg-gray-500"
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