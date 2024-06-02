import React, { useState } from "react";
import InputWIthSearch from "./InputWIthSearch";
import InputLevel from "./InputLevel";
import SelectWork from "./SelectWork";
import YearRangeSelector from "./YearRangeSelector";
import HorizontalLinearStepper from './ui/HorizontalLinearStepper'; 
import { FiEdit3 } from "react-icons/fi";// Adjust the path according to your file structure
import Edit from '../assets/edit.svg'
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Page2() {
    const navigate = useNavigate();
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");
    const [personName, setPersonName] = useState([]);
    const [workExperience, setWorkExperience] = useState([]);
    const [newWork, setNewWork] = useState({ specialization: "", company: "", description: "", years: { startYear: "", endYear: "" } });
    const [education, setEducation] = useState([]);
    const [newEducation, setNewEducation] = useState({ degree: "", university: "", city: "", country: "", years: { startYear: "", endYear: "" } });
    const [certifications, setCertifications] = useState([]);
    const [newCertification, setNewCertification] = useState({ certificate: "", certifiedFrom: "", years: { startYear: "", endYear: "" } });
    const [activeStep, setActiveStep] = useState(1);

    const [showWorkForm, setShowWorkForm] = useState(false);
    const [showEducationForm, setShowEducationForm] = useState(false);
    const [showCertificationForm, setShowCertificationForm] = useState(false);

    const [editIndex, setEditIndex] = useState(null);
    const [editType, setEditType] = useState("");

    const handleAddSkills = (e) => {
        e.preventDefault();
        if (newSkill && personName.length > 0) {
            if (editType === "skill" && editIndex !== null) {
                const updatedSkills = [...skills];
                updatedSkills[editIndex] = { skill: newSkill, level: personName.join(", ") };
                setSkills(updatedSkills);
                setEditIndex(null);
                setEditType("");
            } else {
                setSkills([...skills, { skill: newSkill, level: personName.join(", ") }]);
            }
            setNewSkill("");
            setPersonName([]);
        }
    };
  

    const handleDeleteSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };


    const handleAddWorkExperience = (e) => {
        e.preventDefault();
        if (newWork.specialization && newWork.company && newWork.description) {
            if (editType === "work" && editIndex !== null) {
                const updatedWorkExperience = [...workExperience];
                updatedWorkExperience[editIndex] = newWork;
                setWorkExperience(updatedWorkExperience);
                setEditIndex(null);
                setEditType("");
            } else {
                setWorkExperience([...workExperience, newWork]);
            }
            setNewWork({ specialization: "", company: "", description: "", years: { startYear: "", endYear: "" } });
            setShowWorkForm(false);
        }
    };


    const handleCancelShowWork = (e) => {
        setShowWorkForm(false)
    }
    const handleCancelShowEducation = (e) => {
        setShowEducationForm(false)
    }
    const handleCancelShowCertificat = (e) => {
        setShowCertificationForm(false)
    }

    const handleEditWorkExperience = (index) => {
        setEditIndex(index);
        setEditType("work");
        setNewWork(workExperience[index]);
        setShowWorkForm(true);
    };

    const handleDeleteWorkExperience = (index) => {
        setWorkExperience(workExperience.filter((_, i) => i !== index));
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        if (newEducation.degree && newEducation.university) {
            if (editType === "education" && editIndex !== null) {
                const updatedEducation = [...education];
                updatedEducation[editIndex] = newEducation;
                setEducation(updatedEducation);
                setEditIndex(null);
                setEditType("");
            } else {
                setEducation([...education, newEducation]);
            }
            setNewEducation({ degree: "", university: "", city: "", country: "", years: { startYear: "", endYear: "" } });
            setShowEducationForm(false);
        }
    };

    const handleEditEducation = (index) => {
        setEditIndex(index);
        setEditType("education");
        setNewEducation(education[index]);
        setShowEducationForm(true);
    };

    const handleDeleteEducation = (index) => {
        setEducation(education.filter((_, i) => i !== index));
    };

    const handleAddCertification = (e) => {
        e.preventDefault();
        if (newCertification.certificate && newCertification.certifiedFrom) {
            if (editType === "certification" && editIndex !== null) {
                const updatedCertifications = [...certifications];
                updatedCertifications[editIndex] = newCertification;
                setCertifications(updatedCertifications);
                setEditIndex(null);
                setEditType("");
            } else {
                setCertifications([...certifications, newCertification]);
            }
            setNewCertification({ certificate: "", certifiedFrom: "", years: { startYear: "", endYear: "" } });
            setShowCertificationForm(false);
        }
    };

    const handleEditCertification = (index) => {
        setEditIndex(index);
        setEditType("certification");
        setNewCertification(certifications[index]);
        setShowCertificationForm(true);
    };

    const handleDeleteCertification = (index) => {
        setCertifications(certifications.filter((_, i) => i !== index));
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
       navigate('/')
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        navigate('/BecaumeSeller/Page1')
    };



    return (
        <>
            <div className="mt-10 border-t-2 border-gray-300/50"></div>
            <div className='mt-7'></div>
            <HorizontalLinearStepper activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
            <div className="mt-10 border-t-2 border-gray-300/50"></div>
            <div className="bg-white">
                <div className="py-14 md:py-28">
                    <div>
                        <h1 className="text-4xl font-bold pl-10 tracking-tight text-gray-500">Personal Info</h1>
                        <p className="mt-6 text-lg w-[30rem] pl-10 text-gray-600">
                            This is your time to shine. Let potential buyers know what you do best and how you gained your skills,
                            certifications and experience.
                        </p>
                    </div>
                    <div className="mt-10 border-t-2 border-gray-300/50"></div>
                    <div className="w-full mt-10 ml-10">
                        <form onSubmit={handleAddSkills} >
                            {/* Skills */}
                            <div className="flex items-center justify-between w-2/3 mt-20">
                                <label htmlFor="FirstName" className="text-2xl font-Fontprimary font-semibold">
                                    Skills :
                                </label>
                                <div>
                                    <div className="flex items-center">
                                        <InputWIthSearch value={newSkill} onChange={setNewSkill} />
                                        <InputLevel value={personName} onChange={(e) => setPersonName(e.target.value)} />
                                        <button
                                            className="px-2 py-3.5 ml-2 w-[7rem] rounded bg-[#8C41F3] text-white"
                                            onClick={handleAddSkills}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <table className="w-full border rounded-lg border-white">
                                        <thead>
                                            <tr className="bg-white">
                                                <th className="border w-[25.5rem] py-3.5 px-2 text-left">Skill</th>
                                                <th className="border py-3.5 px-2 text-left">Level</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {skills.map((skill, index) => (
                                                <tr key={index}>
                                                    <td className="border p-2 text-left">{skill.skill}</td>
                                                    <td className="border p-2 text-left">{skill.level}
                                                    </td>
                                                    <button onClick={() => handleDeleteSkill(index)} className="text-gray-500 duration-500 hover:text-red-600"><MdDelete size={30}/></button>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Work Experience */}
                            <div className="flex items-center justify-between w-2/3 mt-20">
                                <label htmlFor="WorkExperience" className="text-2xl font-Fontprimary font-semibold">
                                    Work Experience :
                                </label>
                                <div className="">
                                    <button
                                        className="px-2 py-3.5 w-[7rem] rounded bg-[#8C41F3] text-white"
                                        onClick={() => setShowWorkForm(true)}
                                    >
                                        Add New                                    </button>
                                    <button
                                        className="px-2 ml-2 py-3.5 w-[7rem] rounded bg-lime-500 text-white"
                                        onClick={handleCancelShowWork}
                                    >Cancel</button>
                                    {showWorkForm && (
                                        <form onSubmit={handleAddWorkExperience}>
                                            <div className="flex items-center mt-4">
                                                <SelectWork value={newWork.specialization} onChange={(specialization) => setNewWork({ ...newWork, specialization })} />
                                                <input
                                                    type="text"
                                                    className="border w-[25rem] border-gray-400 py-3.5 px-2 rounded ml-2"
                                                    placeholder="Name of Company"
                                                    value={newWork.company}
                                                    onChange={(e) => setNewWork({ ...newWork, company: e.target.value })}
                                                />
                                                <button
                                                    className="px-2 ml-2 py-3.5 w-[7rem] rounded bg-[#8C41F3] text-white"
                                                    onClick={handleAddWorkExperience}
                                                >
                                                    {editType === "work" ? "Update" : "Add"}

                                                </button>
                                            </div>
                                            <textarea
                                                className="w-[42rem] min-h-[10rem] max-h-[15rem] h-[15rem] bg-gray-50 ring-0 border border-gray-300 text-gray-900 text-xl my-3 p-2.5"
                                                placeholder="Share a bit about your work experience, cool projects you've completed, and your area of expertise."
                                                value={newWork.description}
                                                onChange={(e) => setNewWork({ ...newWork, description: e.target.value })}
                                                required
                                            />
                                            <YearRangeSelector value={newWork.years} onChange={(years) => setNewWork({ ...newWork, years })} />
                                        </form>
                                    )}
                                    <table className="w-full border rounded-lg border-white mt-4">
                                        <thead>
                                            <tr className="bg-white">
                                                <th className="border w-[18.5rem] py-3.5 px-2 text-left">Specialization</th>
                                                <th className="border py-3.5 px-2 text-left">Company</th>
                                                <th className="border w-[25rem] py-3.5 px-2 text-left">Description</th>
                                                <th className="border py-3.5 px-2 text-left">Years</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {workExperience.map((work, index) => (
                                                <tr key={index}>
                                                    <td className="border p-2 text-left">{work.specialization}</td>
                                                    <td className="border p-2 text-left">{work.company}</td>
                                                    <td className="border p-2 text-left">{work.description}</td>
                                                    <td className="border p-2 text-left">{`${work.years.startYear} - ${work.years.endYear}`}</td>
                                                    <button onClick={() => handleEditWorkExperience(index)} className="text-gray-500 duration-500 hover:text-green-600"><FiEdit3 size={25} /></button>
                                                    <button onClick={() => handleDeleteWorkExperience(index)} className="text-gray-500 duration-500 hover:text-red-600"><MdDelete size={25}/></button>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="flex items-center justify-between w-2/3 mt-20">
                                <label htmlFor="Education" className="text-2xl font-Fontprimary font-semibold">
                                    Education :
                                </label>
                                <div>
                                    <button
                                        className="px-2 py-3.5 w-[7rem] rounded bg-[#8C41F3] text-white"
                                        onClick={() => setShowEducationForm(true)}
                                    >
                                        Add
                                    </button>
                                    <button
                                        className="px-2 ml-2 py-3.5 w-[7rem] rounded bg-lime-500 text-white"
                                        onClick={handleCancelShowEducation}
                                    >Cancel</button>
                                    {showEducationForm && (
                                        <form onSubmit={handleAddEducation}>
                                            <div className="flex items-center mt-4">
                                                <input
                                                    type="text"
                                                    className="border w-[15rem] border-gray-400 py-3.5 px-2 rounded ml-2"
                                                    placeholder="Degree"
                                                    value={newEducation.degree}
                                                    onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                                                />
                                                <input
                                                    type="text"
                                                    className="border w-[14rem] border-gray-400 py-3.5 px-2 rounded ml-2"
                                                    placeholder="University"
                                                    value={newEducation.university}
                                                    onChange={(e) => setNewEducation({ ...newEducation, university: e.target.value })}
                                                />
                                                <button
                                                    className="px-2 ml-2 py-3.5 w-[7rem] rounded bg-[#8C41F3] text-white"
                                                    onClick={handleAddEducation}
                                                >
                                                    {editType === "education" ? "Update" : "Add"}
                                                </button>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <input
                                                    type="text"
                                                    className="border w-[10rem] border-gray-400 py-3.5 px-2 rounded ml-2"
                                                    placeholder="City"
                                                    value={newEducation.city}
                                                    onChange={(e) => setNewEducation({ ...newEducation, city: e.target.value })}
                                                />
                                                <input
                                                    type="text"
                                                    className="border w-[10rem] border-gray-400 py-3.5 px-2 rounded ml-2"
                                                    placeholder="Country"
                                                    value={newEducation.country}
                                                    onChange={(e) => setNewEducation({ ...newEducation, country: e.target.value })}
                                                />
                                               
                                            </div>
                                            <YearRangeSelector value={newEducation.years} onChange={(years) => setNewEducation({ ...newEducation, years })} />
                                        </form>
                                    )}
                                    <table className="w-full border rounded-lg border-white mt-4">
                                        <thead>
                                            <tr className="bg-white">
                                                <th className="border w-[15rem] py-3.5 px-2 text-left">Degree</th>
                                                <th className="border w-[14rem] py-3.5 px-2 text-left">University</th>
                                                <th className="border w-[10rem] py-3.5 px-2 text-left">City</th>
                                                <th className="border w-[10rem] py-3.5 px-2 text-left">Country</th>
                                                <th className="border py-3.5 px-2 text-left">Years</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {education.map((edu, index) => (
                                                <tr key={index}>
                                                    <td className="border p-2 text-left">{edu.degree}</td>
                                                    <td className="border p-2 text-left">{edu.university}</td>
                                                    <td className="border p-2 text-left">{edu.city}</td>
                                                    <td className="border p-2 text-left">{edu.country}</td>
                                                    <td className="border p-2 text-left">{`${edu.years.startYear} - ${edu.years.endYear}`}
                                                    </td>
                                                        <button onClick={() => handleEditEducation(index)} className="text-gray-500 duration-500 hover:text-green-600"><FiEdit3 size={25} /></button>
                                                        <button onClick={() => handleDeleteEducation(index)} className="text-gray-500 duration-500 hover:text-red-600"><MdDelete size={25}/></button>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="flex items-center justify-between w-2/3 mt-20">
                                <label htmlFor="Certifications" className="text-2xl font-Fontprimary font-semibold">
                                    Certifications :
                                </label>
                                <div>
                                    <button
                                        className="px-2 py-3.5 w-[7rem] rounded bg-[#8C41F3] text-white"
                                        onClick={() => setShowCertificationForm(true)}
                                    >
                                        Add
                                    </button>
                                    <button
                                        className="px-2 ml-2 py-3.5 w-[7rem] rounded bg-lime-500 text-white"
                                        onClick={handleCancelShowCertificat}
                                    >Cancel</button>
                                    {showCertificationForm && (
                                        <form onSubmit={handleAddCertification}>
                                            <div className="flex items-center mt-4">
                                                <input
                                                    type="text"
                                                    className="border w-[25rem] border-gray-400 py-3.5 px-2 rounded ml-2"
                                                    placeholder="Certificate or Award"
                                                    value={newCertification.certificate}
                                                    onChange={(e) => setNewCertification({ ...newCertification, certificate: e.target.value })}
                                                />
                                                <input
                                                    type="text"
                                                    className="border w-[25rem] border-gray-400 py-3.5 px-2 rounded ml-2"
                                                    placeholder="Certified From"
                                                    value={newCertification.certifiedFrom}
                                                    onChange={(e) => setNewCertification({ ...newCertification, certifiedFrom: e.target.value })}
                                                />
                                                <button
                                                    className="px-2 ml-2 py-3.5 w-[7rem] rounded bg-[#8C41F3] text-white"
                                                    onClick={handleAddCertification}
                                                >
                                                    {editType === "certification" ? "Update" : "Add"}                                                </button>
                                            </div>
                                            <YearRangeSelector value={newCertification.years} onChange={(years) => setNewCertification({ ...newCertification, years })} />
                                        </form>
                                    )}
                                    <table className="w-full border rounded-lg border-white mt-4">
                                        <thead>
                                            <tr className="bg-white">
                                                <th className="border w-[25rem] py-3.5 px-2 text-left">Certificate</th>
                                                <th className="border w-[25rem] py-3.5 px-2 text-left">Certified From</th>
                                                <th className="border py-3.5 px-2 text-left">Years</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {certifications.map((cert, index) => (
                                                <tr key={index}>
                                                    <td className="border p-2 text-left">{cert.certificate}</td>
                                                    <td className="border p-2 text-left">{cert.certifiedFrom}</td>
                                                    <td className="border p-2 text-left">{`${cert.years.startYear} - ${cert.years.endYear}`}
                                                    </td>
                                                        <button onClick={() => handleEditCertification(index)} className="text-gray-500 duration-500 hover:text-green-600"><FiEdit3 size={25}/></button>
                                                        <button onClick={() => handleDeleteCertification(index)} className="text-gray-500 duration-500 hover:text-red-600"><MdDelete size={25}/></button>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="flex items-center w-2/3 mt-40">
                                <button type="submit" className="text-xl px-9 py-5 bg-[#8C41F3] text-white rounded-lg mt-4">
                                    Finish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
