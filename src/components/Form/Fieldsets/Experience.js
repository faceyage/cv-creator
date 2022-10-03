import { Component } from "react";
import Input from "../Utils/Input";

class Experience extends Component {
  render() {
    const { company, position, jobDesc, startDate, endDate } = this.props.experience;
    return (
      <fieldset>
        <legend>Job Experience</legend>
        <Input
          id="company"
          label="Company:"
          value={company}
          handleChange={this.props.handleChange}
        />
        <Input
          id="position"
          label="Position: :"
          value={position}
          handleChange={this.props.handleChange}
        />
        <Input
          id="jobDesc"
          label="Job Desc:"
          value={jobDesc}
          handleChange={this.props.handleChange}
        />
        <Input
          id="startDate"
          label="Start Date:"
          type="date"
          handleChange={this.props.handleChange}
          value={startDate}
        />
        <Input
          id="endDate"
          label="End Date:"
          type="date"
          handleChange={this.props.handleChange}
          value={endDate}
        />
        <button type="button" className="btn" onClick={this.props.addExperience}>
          Add Experience
        </button>
      </fieldset>
    );
  }
}

export default Experience;
