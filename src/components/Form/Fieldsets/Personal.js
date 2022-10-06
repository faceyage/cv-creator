import Input from "../Utils/Input";

function GeneralInfo(props) {
  const { name, bio, phone, email } = props.personal;
  const { handleChange } = props;
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

export default GeneralInfo;
