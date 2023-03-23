import { useState } from "react";

export default function useValidForm() {
  const [nameIsValid, setNameIsValid] = useState(true);
  const [subjectIsValid, setSubjectIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [messageIsValid, setMessageIsValid] = useState(true);

  const handleInputNameChange = (e) => {
    setNameIsValid(e.target.validity.valid);
  };

  const handleInputSubjectChange = (e) => {
    setSubjectIsValid(e.target.validity.valid);
  };
  const handleInputEmailChange = (e) => {
    setEmailIsValid(e.target.validity.valid);
  };

  const validateMessage = (messageValue) => {
    if (messageValue.length > 200) {
      return false;
    }

    const regex = /^[a-zA-Z0-9,.!?'"()\s]+$/;
    if (!regex.test(messageValue)) {
      return false;
    }
    return true;
  };

  const handleInputMessageChange = (e) => {
    const messageValue = e.target.value;
    setMessageIsValid(validateMessage(messageValue));
  };

  return {
    nameIsValid,
    subjectIsValid,
    emailIsValid,
    messageIsValid,
    handleInputNameChange,
    handleInputSubjectChange,
    handleInputEmailChange,
    handleInputMessageChange,
  };
}
