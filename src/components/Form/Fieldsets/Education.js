import { Component } from "react";
import Input from "../Utils/Input";

class Education extends Component {
  render() {
    const { id, school, degree, startDate, endDate } = this.props.education;
    const { deleteEducation } = this.props;
    return (
      <div className="education-form">
        <Input
          id="school"
          label="School:"
          handleChange={(e) => {
            this.props.handleChange(e, id);
          }}
          value={school}
        />
        <Input
          id="degree"
          label="Degree:"
          handleChange={(e) => {
            this.props.handleChange(e, id);
          }}
          value={degree}
        />
        <Input
          id="startDate"
          label="Start Date:"
          type="date"
          handleChange={(e) => {
            this.props.handleChange(e, id);
          }}
          value={startDate}
        />
        <Input
          id="endDate"
          label="End Date:"
          type="date"
          handleChange={(e) => {
            this.props.handleChange(e, id);
          }}
          value={endDate}
        />
        <button
          type="button "
          className="btn deleteBtn"
          onClick={() => {
            deleteEducation(id);
          }}>
          Delete
        </button>
      </div>
    );
  }
}

export default Education;
