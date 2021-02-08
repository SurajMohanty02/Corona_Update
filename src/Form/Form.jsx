import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import Contact from "./Contact";
import Review from "./Review";
import Submit from "./Submit";
const Default = {
  firstname: "",
  lastname: "",
  nickname: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  email: "",
};
const steps = [
  { id: "PersonalDetails" },
  { id: "Address" },
  { id: "Contact" },
  { id: "Review" },
  { id: "Submit" },
];
const Form = () => {
  const [formData, setform] = useForm(Default);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setform, navigation };
  //console.log(steps)
  switch (step.id) {
    case "PersonalDetails":
      return <PersonalDetails {...props} />;
    case "Address":
      return <Address {...props} />;
    case "Contact":
      return <Contact {...props} />;
    case "Review":
      return <Review {...props} />;
    case "Submit":
      return <Submit {...props} />;
  }
  return <div>Multistep Form</div>;
};

export default Form;
