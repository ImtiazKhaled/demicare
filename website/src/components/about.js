import * as React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { useStyletron } from 'baseui'
import { Alert } from 'baseui/icon'
import { Button } from 'baseui/button'
import { Textarea } from 'baseui/textarea'
import { Display2, Display4 } from 'baseui/typography'
import { toaster, ToasterContainer, PLACEMENT } from "baseui/toast";
import { validate as validateEmail } from 'email-validator'
import emailjs, { init } from 'emailjs-com'
import DevTeam from './dev_team'
import Team from './team'
import { t } from "react-switch-lang"

init("user_JW3ks5oI2VRhlP9KdZiiR")

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
    var service_id = "DemicareUTA"
    var email_user_id = "user_JW3ks5oI2VRhlP9KdZiiR"
    var email_template = "template_DemicareUTA"
    e.preventDefault()
    console.log(e.target)
    emailjs.sendForm(service_id, email_template, e.target, email_user_id)
      .then((result) => {
        let toastKey;
        const msg = t('emailSuccess')
        console.log(result, toastKey)
        toastKey = toaster.info((<>{msg}</>), {
          onClose: () => console.log('Toast closed.'),
          overrides: { InnerContainer: { style: { width: '100%' } } }
        });
        clearForm()
      }, (error) => {
        let toastKey;
        const msg = t('emailFail')
        console.error(error, toastKey)
        toastKey = toaster.negative((<>{msg}</>), {
          onClose: () => console.log('Toast closed.'),
          overrides: { InnerContainer: { style: { width: '100%' } } }
        });
      })
  }

  return (
    <ToasterContainer placement={PLACEMENT.bottomRight} autoHideDuration='10000'>
      <div className='contact-container'>
        <Display2 marginBottom="scale1000"> {`${t("aboutUs")}`} </Display2>
        <form onSubmit={sendEmail}>

          <FormControl label={`${t("firstName")}`} >
            <Input
              placeholder={`${t("firstName")}`}
              name="first_name"
              value={first_name}
              onChange={event => setName(event.currentTarget.value)}
              required
            />
          </FormControl>
          <FormControl label={`${t("lastName")}`} >
            <Input
              placeholder={`${t("lastName")}`}
              name="last_name"
              value={last_name}
              onChange={event => setSubject(event.currentTarget.value)}
            />
          </FormControl>

          <FormControl
            label={`${t("email")}`}
            error={shouldShowError ? `${t("emailErreurMessage")}` : null}
          >
            <Input
              placeholder={`${t("email")}`}
              name="email"
              value={email}
              onChange={onEmailChange}
              onBlur={() => setIsVisited(true)}
              error={shouldShowError}
              overrides={shouldShowError ? { After: Negative } : {}}
              type="email"
              required
            />
          </FormControl>

          <FormControl label={`${t("message")}`} >
            <Textarea
              placeholder={`${t("message")}`}
              name="message"
              value={message}
              onChange={event => setMessage(event.currentTarget.value)}
              required
            />
          </FormControl>

          <Button type="submit">{t("submitEmail")}</Button>

          <div style={{ minHeight: '25vh' }} />


          <Display4 marginBottom="scale1000"> {t("team")} </Display4>
          <Team />
          <DevTeam />
          <div style={{ minHeight: '15vh' }} />
        </form>
      </div>
    </ToasterContainer>
  )
}

export default Form;