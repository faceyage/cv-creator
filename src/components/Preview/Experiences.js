function Experience(props) {
  const { experiences } = props;
  return (
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
  );
}

export default Experience;
