import * as React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { useStyletron } from "baseui";
import { Alert } from "baseui/icon";
import { Button } from "baseui/button";
import { Textarea } from "baseui/textarea";
import { Display2 } from "baseui/typography";
import { validate as validateEmail } from "email-validator"; // add this package to your repo with `$ yarn add email-validator`

import { t } from "react-switch-lang";

function Negative() {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        paddingRight: theme.sizing.scale500,
        color: theme.colors.negative400,
      })}
    >
      <Alert size="18px" />
    </div>
  );
}

const Form = () => {
  const [body, setBody] = React.useState("");
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isVisited, setIsVisited] = React.useState(false);
  const shouldShowError = !isEmailValid && isVisited;

  const onEmailChange = ({ target: { value } }) => {
    setEmailValid(validateEmail(value));
    setEmail(value);
  };

  const onSubmit = (event) => {
    const formData = {
      email,
    };

    console.log("form data is ", formData);
  };

  return (
    <div className="contact-container">
      <Display2 marginBottom="scale1000"> {t("contactUs")} </Display2>
      <form onSubmit={(event) => event.preventDefault()}>
        <FormControl label={`${t("yourName")}`}>
          <Input id="name-id" value={name} onChange={(event) => setName(event.currentTarget.value)} />
        </FormControl>

        <FormControl label={`${t("yourEmail")}`} error={shouldShowError ? t("emailErreurMessage") : null}>
          <Input id="email-input-id" value={email} onChange={onEmailChange} onBlur={() => setIsVisited(true)} error={shouldShowError} overrides={shouldShowError ? { After: Negative } : {}} type="email" required />
        </FormControl>

        <FormControl label={`${t("emailSubject")}`}>
          <Input id="subject-id" value={subject} onChange={(event) => setSubject(event.currentTarget.value)} />
        </FormControl>

        <FormControl label={`${t("emailBody")}`}>
          <Textarea id="body-id" value={body} onChange={(event) => setBody(event.currentTarget.value)} />
        </FormControl>

        <Button type="submit" onClick={onSubmit}>
          {t("submitEmail")}
        </Button>
      </form>
    </div>
  );
};

export default Form;
