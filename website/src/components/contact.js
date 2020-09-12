import * as React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { useStyletron } from 'baseui'
import { Alert } from 'baseui/icon'
import { Button, SIZE } from 'baseui/button'
import { Textarea } from 'baseui/textarea'
import { Display2 } from 'baseui/typography'
import { Block } from "baseui/block";
import { toaster, ToasterContainer, PLACEMENT } from "baseui/toast";
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

  const clearForm = () => {
    setMessage('')
    setName('')
    setSubject('')
    setEmail('')
  }

  // send email function, called when Form is submitted
  const sendEmail = (e) => {    
    var email_type = "gmail"
    var email_user_id = "user_otENxMGrIjk8QTSwe7Iwv"
    var email_template = "template_hoangluu404"
    e.preventDefault()
    console.log(e.target)
    emailjs.sendForm(email_type, email_template, e.target, email_user_id)
      .then((result) => {
        console.log(result)
        let toastKey;
        const msg = t('emailSuccess')
        toastKey = toaster.info((<>{msg}</>), {
          onClose: ()=>console.log('Toast closed.'),
          overrides: {InnerContainer: {style: {width: '100%'}}}});
          clearForm()
      }, (error) => {
        let toastKey;
        const msg = t('emailFail')
        console.error(error)
        toastKey = toaster.negative((<>{msg}</>), {
          onClose: ()=>console.log('Toast closed.'),
          overrides: {InnerContainer: {style: {width: '100%'}}}});
      })
  }

  return (  
    <ToasterContainer placement={PLACEMENT.bottomRight} autoHideDuration='10000'>
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
              required
            />
          </FormControl>
          
          <Button type="submit">{t("submitEmail")}</Button>
      </form>
      </div>
    </ToasterContainer>
  )
}

export default Form;