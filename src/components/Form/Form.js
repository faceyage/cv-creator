import React, { Component } from "react";
import CV from "../CV";
import Personal from "./Fieldsets/Personal";
import Education from "./Fieldsets/Education";
import Experience from "./Fieldsets/Experience";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      educations: [],
      personal: {
        name: "John Doe",
        bio: "Hi I'm Joe Doe and I like coding!",
        phone: "+123 456 789",
        email: "johndoe@gmail.com",
      },
      experience: {
        company: "Microsoft",
        position: "Senior Software Engineer",
        jobDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quos!",
        startDate: "01/01/2010",
        endDate: "01/01/2015",
      },
      education: {
        school: "University of Oxford",
        degree: "Computer Science",
        startDate: "01/01/2005",
        endDate: "01/01/2009",
      },
    };
  }

  addExperience = () => {
    const { company, position, jobDesc, startDate, endDate } = this.state.experience;
    const experienceObj = { company, position, jobDesc, startDate, endDate };
    //check if all inputs are not empty if one is empty don't add
    for (const key in experienceObj) {
      console.log(experienceObj[key]);
      if (experienceObj[key] === "") {
        alert("You must fill all fields!");
        return;
      }
    }
    this.setState({
      experiences: [...this.state.experiences, experienceObj],
      experience: {
        company: "",
        position: "",
        jobDesc: "",
        startDate: "",
        endDate: "",
      },
    });
  };

  addEducation = () => {
    const { school, degree, startDate, endDate } = this.state.education;
    const educationObj = { school, degree, startDate, endDate };
    //check if all inputs are not empty if one is empty don't add
    for (const key in educationObj) {
      console.log(educationObj[key]);
      if (educationObj[key] === "") {
        alert("You must fill all fields!");
        return;
      }
    }
    this.setState({
      educations: [...this.state.educations, educationObj],
      //reset old one after adding
      education: {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(name, email, phone);
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

  handleChangeExperience = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [id]: value,
      },
    }));
  };

  handleChangeEducation = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [id]: value,
      },
    }));
  };

  render() {
    const { personal, experience, education } = this.state;
    return (
      <div className="CV">
        <form className="cv-form" onSubmit={this.handleSubmit}>
          <Personal handleChange={this.handleChangePersonal} personal={personal} />
          <Experience
            handleChange={this.handleChangeExperience}
            experience={experience}
            addExperience={this.addExperience}
          />
          <Education
            handleChange={this.handleChangeEducation}
            education={education}
            addEducation={this.addEducation}
          />
          {/* <button className="btn">Create CV</button> */}
        </form>
        <CV {...this.state} />
      </div>
    );
  }
}

export default Form;
