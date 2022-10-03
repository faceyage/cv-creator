import { Component } from "react";
import Input from "../Utils/Input";

class GeneralInfo extends Component {
  render() {
    const { name, bio, phone, email } = this.props.personal;
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Personal Info</legend>
        <Input id="name" label="Full Name:" handleChange={handleChange} value={name} />
        <Input id="bio" label="Bio: " handleChange={handleChange} value={bio} />
        <Input id="phone" label="Phone Number:" handleChange={handleChange} value={phone} />
        <Input
          id="email"
          label="Email Number:"
          type="email"
          handleChange={handleChange}
          value={email}
        />
      </fieldset>
    );
  }
}

export default GeneralInfo;
