
import { Outlet } from 'react-router-dom';

import React, { useState } from 'react';
import HeaderBecaumeSeller from '../components/HeaderBecaumeSeller';
import { axiosClient } from '@/api/axios';

function BecaumeSeller() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    about_me: '',
    image: '',
    languages: [],
    skills: [],
    work_experience: [],
    education: [],
    certifications: [],
  })
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    const form = new FormData();
    form.append("first_name", formData.first_name);
    form.append("last_name", formData.last_name);
    form.append("about_me", formData.about_me);
    form.append("image", formData.image);
    for (let i = 0; i < formData.languages.length; i++) {
      form.append("languages[]", JSON.stringify(formData.languages[i]));
    }
    for (let i = 0; i < formData.skills.length; i++) {
      form.append("skills[]", JSON.stringify(formData.skills[i]));
    }
    for (let i = 0; i < formData.work_experience.length; i++) {
      form.append("work_experience[]", JSON.stringify(formData.work_experience[i]));
    }
    for (let i = 0; i < formData.education.length; i++) {
      form.append("education[]", JSON.stringify(formData.education[i]));
    }
    for (let i = 0; i < formData.certifications.length; i++) {
      form.append("certifications[]", JSON.stringify(formData.certifications[i]));
    }
    axiosClient
      .post('/become_seller', form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

  }
  return (
    <div >
    <HeaderBecaumeSeller />
      <Outlet context={{ formData, setFormData, submitHandler }}  />
    </div>
  )
}

export default BecaumeSeller
