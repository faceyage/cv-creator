import React, { Component } from "react";

class CV extends Component {
  render() {
    const { personal, educations, experiences } = this.props;
    return (
      <div className="cv-info">
        <div className="personalInfo">
          <h1>{personal.name}</h1>
          <div className="bio">{personal.bio}</div>
          <div className="bottom">
            <div className="email">Email: {personal.email}</div>
            <div className="phone">Phone: {personal.phone}</div>
          </div>
        </div>
        <div className="experiences">
          <hr />
          {experiences.map((experience, index) => {
            const { company, position, jobDesc, startDate, endDate } = experience;
            return (
              <div className="experience" key={index}>
                <div className="left">
                  <div className="company">{company}</div>
                  <div className="position">{position}</div>
                  <div className="jobDesc">{jobDesc}</div>
                </div>
                <div className="date">
                  <div className="startDate">Start: {startDate}</div>
                  <div className="endDate">End: {endDate}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="educations">
          <hr />

          {educations.map((education, index) => {
            const { school, degree, startDate, endDate } = education;
            return (
              <div className="education" key={index}>
                <div className="left">
                  <div className="school">{school}</div>
                  <div className="degree">{degree}</div>
                </div>

                <div className="date">
                  <div className="startDate">Start: {startDate}</div>
                  <div className="startDate">End: {endDate}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CV;
