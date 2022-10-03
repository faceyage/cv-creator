import { Component } from "react";
import Input from "../Utils/Input";

class Education extends Component {
  render() {
    const { school, degree, startDate, endDate } = this.props.education;
    return (
      <fieldset>
        <legend>Education</legend>
        <Input id="school" label="School:" handleChange={this.props.handleChange} value={school} />
        <Input id="degree" label="Degree:" handleChange={this.props.handleChange} value={degree} />
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
        <button type="button" className="btn" onClick={this.props.addEducation}>
          Add Education
        </button>
      </fieldset>
    );
  }
}

export default Education;
