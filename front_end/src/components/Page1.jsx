import React, { useState, useRef } from "react";
import { IoCameraOutline } from "react-icons/io5";
import HorizontalLinearStepper from "./ui/HorizontalLinearStepper"; // Adjust the path according to your file structure
import { useNavigate, useOutletContext } from "react-router-dom";
export default function Page1() {
  const { formData, setFormData } = useOutletContext();
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }))
    setImage(file);
  };
  const navigate = useNavigate();
  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState("");
  const [newLevel, setNewLevel] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const handleAddLanguage = (e) => {
    e.preventDefault();
    if (newLanguage && newLevel) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: [...prevFormData.languages, { name: newLanguage, level: newLevel }],
      }))
      setLanguages([...languages, { language: newLanguage, level: newLevel }]);
      setNewLanguage("");
      setNewLevel("");
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    navigate("/BecaumeSeller/Page2");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className="">
        <div className="mt-10 border-t-2 border-gray-300/50"></div>
        <div className="mt-7"></div>
        <HorizontalLinearStepper
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
        <div className="mt-10 border-t-2 border-gray-300/50"></div>
        <div className="bg-white w-full">
          <div className="py-14 md:py-28">
            <div>
              <h1 className="text-4xl font-bold pl-10 tracking-tight text-gray-500">
                Personal Info
              </h1>
              <p className="mt-6 text-lg pl-10 text-gray-600">
                Tell us a bit about yourself. This information will appear on
                your public profile, so that potential buyers can get to know
                you better.
              </p>
            </div>
            <div className="mt-10 border-t-2 border-gray-300/50"></div>
            <div className=" mt-10 ml-10">
              <form>
                {/* FULL Name */}
                <div className="flex items-center justify-between w-2/3">
                  <label
                    htmlFor="first_name"
                    className="text-2xl font-Fontprimary font-semibold"
                  >
                    Full Name :
                  </label>
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 outline-none ring-0 focus:outline-primary border border-gray-300 text-gray-900 rounded-lg w-[20rem] text-xl p-2.5"
                      placeholder="First Name"
                      required
                      value={formData.first_name}
                      onChange={(e) =>
                        setFormData({ ...formData, first_name: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 outline-none ring-0 focus:outline-primary border border-gray-300 text-gray-900 rounded-lg w-[20rem] text-xl p-2.5 ml-5"
                      placeholder="Last Name"
                      required
                      value={formData.last_name}
                      onChange={(e) =>
                        setFormData({ ...formData, last_name: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Profile Picture */}
                <div className="flex items-center justify-between w-2/3 mt-40">
                  <label
                    htmlFor="Photo"
                    className="text-2xl font-Fontprimary font-semibold"
                  >
                    Profile Picture :
                  </label>
                  <div className="flex flex-col items-center">
                    <div onClick={handleImageClick} className="cursor-pointer">
                      {image ? (
                        <div className="">
                          <div className="bg-gray-200 w-[200px] h-[200px] absolute rounded-full flex justify-center items-center opacity-0  hover:opacity-80 transition-all duration-500">
                            <IoCameraOutline size={60} />
                          </div>
                          <img
                            src={URL.createObjectURL(image)}
                            alt=""
                            className="w-[200px] h-[200px] object-cover rounded-full"
                            
                          />
                        </div>
                      ) : (
                        <img src="./photo.png" alt="" />
                      )}
                      <input
                        type="file"
                        ref={inputRef}
                        onChange={handleImageChange}
                        accept=".jpg, .jpeg, .png"
                        style={{ display: "none" }}
                      />
                    </div>
                    {!image && (
                      <button
                        type="button"
                        onClick={handleImageClick}
                        className="text-xl px-8 py-2 hover:bg-[#8C41F3] border border-primary hover:text-white text-primary transition-all duration-200 rounded-md mt-4"
                      >
                        Upload
                      </button>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-center justify-between w-2/3 mt-40">
                  <label
                    htmlFor="Description"
                    className="text-2xl font-Fontprimary font-semibold"
                  >
                    Description :
                  </label>
                  <textarea
                    className="w-[42rem] h-[15rem] bg-gray-50 outline-none ring-0 border border-gray-300 text-gray-900 rounded-lg  text-xl p-2.5"
                    placeholder="Share a bit about your work experience, cool projects you've completed, and your area of expertise."
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, about_me: e.target.value })
                    }
                  />
                </div>

                {/* Language */}
                <div className="flex items-center justify-between w-2/3 mt-40">
                  <label
                    htmlFor="Language"
                    className="text-2xl font-Fontprimary font-semibold"
                  >
                    Language :
                  </label>
                  <div className="p-6 w-[42rem] bg-gray-100 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <select
                        className="w-2/5 p-2 border border-gray-300 rounded"
                        value={newLanguage}
                        onChange={(e) => setNewLanguage(e.target.value)}
                      >
                        <option value="" hidden>
                          Language
                        </option>
                        {/* Add language options */}
                        <option value="English">English</option>
                        <option value="Arabe">Arabe</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        {/* Add more languages as needed */}
                      </select>
                      <select
                        className="w-2/5 p-2 border border-gray-200 rounded"
                        value={newLevel}
                        onChange={(e) => setNewLevel(e.target.value)}
                      >
                        <option value="" hidden>
                          Language Level
                        </option>
                        <option value="Basic">Basic</option>
                        <option value="Conversational">Conversational</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Native">Native</option>
                      </select>
                      <button
                        className="px-2 py-2 w-[7rem] rounded hover:bg-[#8C41F3] border border-primary transition-all duration-200 hover:text-white text-primary"
                        onClick={handleAddLanguage}
                      >
                        Add
                      </button>
                    </div>

                    <table className="w-full border rounded-lg border-white">
                      <thead>
                        <tr className="bg-white">
                          <th className="border p-2 text-left">Language</th>
                          <th className="border p-2 text-left">Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {languages.map((lang, index) => (
                          <tr key={index}>
                            <td className="border p-2 text-left">
                              {lang.language}
                            </td>
                            <td className="border p-2 text-left">
                              {lang.level}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex items-center w-2/3 mt-40">
                  <button
                    type="submit"
                    onClick={handleNext}
                    className="text-xl px-6 py-3 bg-[#8C41F3] transition-all duration-200 text-white rounded-lg mt-4"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
