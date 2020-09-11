import * as React from 'react';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { useStyletron } from 'baseui';
import { Alert } from 'baseui/icon';
import { Button } from 'baseui/button';
import { Textarea } from 'baseui/textarea';
import { Display2 } from 'baseui/typography';
import { validate as validateEmail } from 'email-validator'; // add this package to your repo with `$ yarn add email-validator`
import emailjs from 'emailjs-com';

// get this in the EmailJS Account
var email_type = "gmail"
var email_user_id = "user_otENxMGrIjk8QTSwe7Iwv"
var email_template = "template_hoangluu404"

// layout style
function Negative() {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.sizing.scale500,
        color: theme.colors.negative400,
      })}
    >
      <Alert size="18px" />
    </div>
  );
}

// send email function, called when Form is submitted
const sendEmail = (e) => {
  
  // get the user authentication and send, check LINE 12
  emailjs.sendForm(email_type, email_template, e.target, email_user_id)
    .then((result) => {
        alert(result.text);
    }, (error) => {
        alert("Thank you for contacting us\nWe will be with you shortly")
        console.log(error.text);
    });
}

// Form variables
const Form = () => {
  const [message, setMessage] = React.useState('');
  const [first_name, setName] = React.useState('');
  const [last_name, setSubject] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isVisited, setIsVisited] = React.useState(false);
  const shouldShowError = !isEmailValid && isVisited;
  
  const onEmailChange = ({target: {value}}) => {
    setEmailValid(validateEmail(value));
    setEmail(value);
  };
  
  return <div className='contact-container'>
    <Display2 marginBottom="scale1000"> Contact Us </Display2>

    {/CONTACT FORM/}
    <form onSubmit={sendEmail}>
        
        <FormControl label="Full Name">
          <Input
            placeholder="First name"
            name="first_name"
            value={first_name}
            onChange={event => setName(event.currentTarget.value)}
            required
          />
        </FormControl>

        <FormControl>
          <Input
            placeholder="Last name"
            name="last_name"
            value={last_name}
            onChange={event => setSubject(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl
          label="Your Email Address"
          error={ shouldShowError ? 'Please input a valid email address' : null }
        >
          <Input
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={onEmailChange}
            onBlur={() => setIsVisited(true)}
            error={shouldShowError}
            overrides={shouldShowError ? {After: Negative} : {}}
            type="email"
            required
          />
        </FormControl>
 
        <FormControl label="Message" >
          <Textarea
            placeholder="Enter your message"
            name="message"
            value={message}
            onChange={event => setMessage(event.currentTarget.value)}
            required
          />
        </FormControl>
        
        <Button type="submit">Submit</Button>     
      </form>
  </div> 
};

export default Form;