import React, { useState } from "react";
import CV from "../CV";
import Personal from "./Fieldsets/Personal";
import Education from "./Fieldsets/Education";
import Experience from "./Fieldsets/Experience";
import uniqid from "uniqid";

function Form(props) {
  const [experiences, setExperiences] = useState([
    {
      id: uniqid(),
      company: "Microsoft",
      position: "Senior Software Engineer",
      jobDesc: "Built large scalable projects for over 10million users.",
      startDate: "2010-01-01",
      endDate: "2015-01-01",
    },
  ]);
  const [personal, setPersonal] = useState({
    name: "John Doe",
    bio: "Hi I'm Joe Doe and I like coding!",
    phone: "+123 456 789",
    email: "johndoe@gmail.com",
  });
  const [educations, setEducations] = useState([
    {
      school: "University of Oxford",
      degree: "Computer Science",
      startDate: "2005-01-01",
      endDate: "2009-01-01",
    },
  ]);

  const addExperience = () => {
    const newExperience = {
      id: uniqid(),
      company: "",
      position: "",
      jobDesc: "",
      startDate: "",
      endDate: "",
    };

    setExperiences([...experiences, newExperience]);
  };

  const addEducation = () => {
    const newEducation = {
      id: uniqid(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    };

    setEducations([...educations, newEducation]);
  };

  const deleteExperience = (id) => {
    setExperiences((prev) => prev.filter((experience) => experience.id !== id));
  };

  const deleteEducation = (id) => {
    const temp_educations = educations.filter((education) => education.id !== id);
    setEducations(temp_educations);
  };

  const handleChangePersonal = (e) => {
    const { id, value } = e.target;
    setPersonal({ ...personal, [id]: value });
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    const temp_experiences = experiences.map((experience) => {
      if (experience.id === id) {
        experience[name] = value;
      }
      return experience;
    });

    setExperiences(temp_experiences);
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    const temp_educations = educations.map((education) => {
      if (education.id === id) {
        education[name] = value;
      }
      return education;
    });
    setEducations(temp_educations);
  };

  return (
    <div className="CV">
      <form className="cv-form">
        <Personal handleChange={handleChangePersonal} personal={personal} />
        <fieldset>
          <legend>Job Experience</legend>
          {experiences.map((experience) => {
            return (
              <Experience
                key={experience.id}
                handleChange={handleChangeExperience}
                deleteExperience={deleteExperience}
                experience={experience}
              />
            );
          })}
          <button className="btn" type="button" onClick={addExperience}>
            Add Experience
          </button>
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          {educations.map((education, index) => {
            return (
              <Education
                key={index}
                handleChange={handleChangeEducation}
                education={education}
                deleteEducation={deleteEducation}
              />
            );
          })}
          <button type="button" className="btn" onClick={addEducation}>
            Add Education
          </button>
        </fieldset>
      </form>
      <CV personal={personal} educations={educations} experiences={experiences} />
    </div>
  );
}

export default Form;
