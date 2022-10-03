import React, { Component } from "react";
import CV from "../CV";
import Personal from "./Fieldsets/Personal";
import Education from "./Fieldsets/Education";
import Experience from "./Fieldsets/Experience";
import uniqid from "uniqid";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          id: uniqid(),
          company: "Microsoft",
          position: "Senior Software Engineer",
          jobDesc: "Built large scalable projects for over 10million users.",
          startDate: "2010-01-01",
          endDate: "2015-01-01",
        },
      ],
      educations: [
        {
          school: "University of Oxford",
          degree: "Computer Science",
          startDate: "2005-01-01",
          endDate: "2009-01-01",
        },
      ],
      personal: {
        name: "John Doe",
        bio: "Hi I'm Joe Doe and I like coding!",
        phone: "+123 456 789",
        email: "johndoe@gmail.com",
      },
    };
  }

  addExperience = () => {
    const newExperience = {
      id: uniqid(),
      company: "",
      position: "",
      jobDesc: "",
      startDate: "",
      endDate: "",
    };

    this.setState((prevState) => {
      return {
        experiences: [...prevState.experiences, newExperience],
      };
    });
    console.log(this.state.experiences);
  };

  addEducation = () => {
    const newEducation = {
      id: uniqid(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    };

    this.setState((prevState) => {
      return {
        educations: [...prevState.educations, newEducation],
      };
    });
  };

  deleteExperience = (id) => {
    this.setState((prevState) => {
      //keep every element except target element
      const experiences = prevState.experiences.filter((experience) => experience.id !== id);
      return {
        experiences: experiences,
      };
    });
  };

  deleteEducation = (id) => {
    this.setState((prevState) => {
      //keep every element except target element
      const educations = prevState.educations.filter((education) => education.id !== id);
      return {
        educations: educations,
      };
    });
  };

  handleChangePersonal = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        [id]: value,
      },
    }));
  };

  handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const experiences = prevState.experiences.map((experience) => {
        if (experience.id === id) {
          experience[name] = value;
        }
        return experience;
      });
      return {
        experiences: experiences,
      };
    });
  };

  handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const educations = prevState.educations.map((education) => {
        if (education.id === id) {
          education[name] = value;
        }
        return education;
      });
      return {
        educations: educations,
      };
    });
  };

  render() {
    const { personal, experiences, educations } = this.state;
    return (
      <div className="CV">
        <form className="cv-form" onSubmit={this.handleSubmit}>
          <Personal handleChange={this.handleChangePersonal} personal={personal} />
          <fieldset>
            <legend>Job Experience</legend>
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  handleChange={this.handleChangeExperience}
                  deleteExperience={this.deleteExperience}
                  experience={experience}
                />
              );
            })}
            <button className="btn" type="button" onClick={this.addExperience}>
              Add Experience
            </button>
          </fieldset>

          <fieldset>
            <legend>Education</legend>
            {educations.map((education, index) => {
              return (
                <Education
                  key={index}
                  handleChange={this.handleChangeEducation}
                  education={education}
                  deleteEducation={this.deleteEducation}
                />
              );
            })}
            <button type="button" className="btn" onClick={this.addEducation}>
              Add Education
            </button>
          </fieldset>

          {/* <button className="btn">Create CV</button> */}
        </form>
        <CV {...this.state} />
      </div>
    );
  }
}

export default Form;
