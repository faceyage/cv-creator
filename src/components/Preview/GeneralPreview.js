import React from "react";
import Personal from "./Personal";
import Experience from "./Experiences";
import Educations from "./Educations";

//react to print only works in class components
class GeneralPreview extends React.Component {
  render() {
    const { personal, educations, experiences } = this.props;

    return (
      <div className="cv-info">
        <Personal personal={personal} />
        <Experience experiences={experiences} />
        <Educations educations={educations} />
      </div>
    );
  }
}

export default GeneralPreview;
