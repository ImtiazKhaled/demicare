import * as React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { useStyletron } from 'baseui'
import { Alert } from 'baseui/icon'
import { Button } from 'baseui/button'
import { Textarea } from 'baseui/textarea'
import { Display2 } from 'baseui/typography'
import { validate as validateEmail } from 'email-validator'
import emailjs from 'emailjs-com'
import { t } from "react-switch-lang"

// layout style
const Negative = () => {
  const [css, theme] = useStyletron()
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
  )
}



// Form variables
const Form = () => {
  const [message, setMessage] = React.useState('')
  const [first_name, setName] = React.useState('')
  const [last_name, setSubject] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [isEmailValid, setEmailValid] = React.useState(false)
  const [isVisited, setIsVisited] = React.useState(false)
  const shouldShowError = !isEmailValid && isVisited

  const onEmailChange = ({ target: { value } }) => {
    setEmailValid(validateEmail(value))
    setEmail(value)
  }

  // send email function, called when Form is submitted
  const sendEmail = (e) => {    
    var email_type = "gmail"
    var email_user_id = "imtiazkhaled07"
    var email_template = "template_hoangluu404"

    emailjs.sendForm(email_type, email_template, e.target, email_user_id)
      .then((result) => {
          alert(result.text)
      }, (error) => {
          alert(error.text)
      })
  
  }

  return (  
    <div className='contact-container'>
    <Display2 marginBottom="scale1000"> {`${t("contactUs")}`} </Display2>
    <form onSubmit={sendEmail}>
        
        <FormControl label={`${t("yourName")}`} >
          <Input
            placeholder={`${t("yourName")}`}
            name="first_name"
            value={first_name}
            onChange={event => setName(event.currentTarget.value)}
            required
        />
        
        </FormControl>
        <FormControl label={`${t("emailSubject")}`} >
          <Input
            placeholder={`${t("emailSubject")}`}
            name="last_name"
            value={last_name}
            onChange={event => setSubject(event.currentTarget.value)}
        />
        </FormControl>
        <FormControl
          
          label={`${t("yourEmail")}`}
          error={ shouldShowError ? `${t("emailErreurMessage")}` : null }
        >
          <Input
            placeholder={`${t("yourEmail")}`}
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
 
        <FormControl label={`${t("emailBody")}`} >
          <Textarea
            placeholder={`${t("emailBody")}`}
            name="message"
            value={message}
            onChange={event => setMessage(event.currentTarget.value)}
          />
        </FormControl>
        
        <Button type="submit">{t("submitEmail")}</Button>
      
      </form>
    </div>
  )
}

export default Form