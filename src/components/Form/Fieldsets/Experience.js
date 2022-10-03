import { Component } from "react";
import Input from "../Utils/Input";

class Experience extends Component {
  render() {
    const { id, company, position, jobDesc, startDate, endDate } = this.props.experience;
    const { deleteExperience } = this.props;
    return (
      <div className="experience-form">
        <Input
          id="company"
          label="Company:"
          value={company}
          handleChange={(e) => {
            this.props.handleChange(e, id);
          }}
        />
        <Input
          id="position"
          label="Position: :"
          value={position}
          handleChange={(e) => {
            this.props.handleChange(e, id);
          }}
        />
        <Input
          id="jobDesc"
          label="Job Desc:"
          value={jobDesc}
          handleChange={(e) => {
            this.props.handleChange(e, id);
          }}
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
            deleteExperience(id);
          }}>
          Delete
        </button>
      </div>
    );
  }
}

export default Experience;
