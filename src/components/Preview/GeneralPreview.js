import Personal from "./Personal";
import Experience from "./Experiences";
import Educations from "./Educations";

function GeneralPreview(props) {
  const { personal, educations, experiences } = props;

  return (
    <div className="cv-info">
      <Personal personal={personal} />
      <Experience experiences={experiences} />
      <Educations educations={educations} />
    </div>
  );
}

export default GeneralPreview;
