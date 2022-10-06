function Educations(props) {
  const { educations } = props;

  return (
    <div className="educations">
      <div className="title">Education</div>
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
  );
}

export default Educations;
