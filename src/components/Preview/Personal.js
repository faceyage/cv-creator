function Personal(props) {
  const { personal } = props;
  return (
    <div className="personalInfo">
      <h1>{personal.name}</h1>
      <div className="bio">{personal.bio}</div>
      <div className="bottom">
        <div className="email">Email: {personal.email}</div>
        <div className="phone">Phone: {personal.phone}</div>
      </div>
    </div>
  );
}

export default Personal;
