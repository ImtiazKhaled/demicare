import * as React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { useStyletron } from 'baseui'
import { Alert } from 'baseui/icon'
import { Button } from 'baseui/button'
import { Textarea } from 'baseui/textarea'
import { Display2 } from 'baseui/typography'
import { toaster, ToasterContainer, PLACEMENT } from "baseui/toast"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
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
  const [first_name, setFirstName] = React.useState('')
  const [last_name, setLastName] = React.useState('')
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
    setFirstName('')
    setLastName('')
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
        let toastKey
        const msg = t('emailSuccess')
        console.log(result, toastKey)
        toastKey = toaster.info((<>{msg}</>), {
          onClose: ()=>console.log('Toast closed.'),
          overrides: {InnerContainer: {style: {width: '100%'}}}})
          clearForm()
      }, (error) => {
        let toastKey
        const msg = t('emailFail')
        console.error(error, toastKey)
        toastKey = toaster.negative((<>{msg}</>), {
          onClose: ()=>console.log('Toast closed.'),
          overrides: {InnerContainer: {style: {width: '100%'}}}})
      })
  }

  return (  
    <ToasterContainer placement={PLACEMENT.bottomRight} autoHideDuration='10000'>
      <div className='contact-container'>
      <Display2 marginBottom="scale1000"> {`${t("aboutUs")}`} </Display2>
      <form onSubmit={sendEmail}>
          <FlexGrid flexGridColumnCount={2} flexGridColumnGap="scale800" flexGridRowGap="scale800">
            <FlexGridItem key="1">
              <FormControl label={`${t("firstName")}`} >
                <Input
                  placeholder={`${t("firstName")}`}
                  name="first_name"
                  value={first_name}
                  onChange={event => setFirstName(event.currentTarget.value)}
                  required
                />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem key="2">
              <FormControl label={`${t("lastName")}`} >
                <Input
                  placeholder={`${t("lastName")}`}
                  name="last_name"
                  value={last_name}
                  onChange={event => setLastName(event.currentTarget.value)}
                  required
                />
              </FormControl>
            </FlexGridItem>
          </FlexGrid>

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

export default Form