import * as React from 'react';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {useStyletron} from 'baseui';
import {Alert} from 'baseui/icon';
import {Button} from 'baseui/button';
import {Textarea} from 'baseui/textarea';
import {validate as validateEmail} from 'email-validator'; // add this package to your repo with `$ yarn add email-validator`

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

const Form = () => {
  const [body, setBody] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isVisited, setIsVisited] = React.useState(false);
  const shouldShowError = !isEmailValid && isVisited;
  
  const onEmailChange = ({target: {value}}) => {
    setEmailValid(validateEmail(value));
    setEmail(value);
  };
  
  const onSubmit = (event) => {
    
    const formData = {
      email
    }

    console.log('form data is ', formData)
  };

  return <form onSubmit={event => event.preventDefault()} className='contact-container'>
      
      <FormControl label="Your Name" >
        <Input
          id="name-id"
          value={name}
          onChange={event => setName(event.currentTarget.value)}
      />
      </FormControl>
      
      <FormControl
        label="Your Email Address"
        error={ shouldShowError ? 'Please input a valid email address' : null }
      >
        <Input
          id="email-input-id"
          value={email}
          onChange={onEmailChange}
          onBlur={() => setIsVisited(true)}
          error={shouldShowError}
          overrides={shouldShowError ? {After: Negative} : {}}
          type="email"
          required
        />
      </FormControl>

      <FormControl label="Email Body" >
        <Textarea
          id="body-id"
          value={body}
          onChange={event => setBody(event.currentTarget.value)}
      />
      </FormControl>
      
      <Button type="submit" onClick={onSubmit}>Submit Email</Button>
    
    </form>
};

export default Form