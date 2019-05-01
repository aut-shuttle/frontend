//@flow
const strings = {
    title: "Create New Account",
    buttonText: "Create Account",
    first_nameLabel: "First Name",
    last_nameLabel: "Last Name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter email",
    passwordLabel: "Password",
    passwordPlaceholder: "Password",
    termsLabel: "Agree to the terms and policy",
  };
  
  export default strings;
  
  export type stringTypes = { [$Keys<typeof strings>]: string };