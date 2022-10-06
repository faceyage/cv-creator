import Input from "../Utils/Input";

function Education(props) {
  const { id, school, degree, startDate, endDate } = props.education;
  const { deleteEducation } = props;
  return (
    <div className="education-form">
      <Input
        id="school"
        label="School:"
        handleChange={(e) => {
          props.handleChange(e, id);
        }}
        value={school}
      />
      <Input
        id="degree"
        label="Degree:"
        handleChange={(e) => {
          props.handleChange(e, id);
        }}
        value={degree}
      />
      <Input
        id="startDate"
        label="Start Date:"
        type="date"
        handleChange={(e) => {
          props.handleChange(e, id);
        }}
        value={startDate}
      />
      <Input
        id="endDate"
        label="End Date:"
        type="date"
        handleChange={(e) => {
          props.handleChange(e, id);
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

export default Education;
