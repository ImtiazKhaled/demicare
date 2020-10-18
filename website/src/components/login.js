import * as React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { useStyletron } from 'baseui'
import { Alert } from 'baseui/icon'
import { Button } from 'baseui/button'
import { validate as validateEmail } from 'email-validator'
import { t } from "react-switch-lang"
import { firebaseApp as fire } from './common/Firebase'
import { useUsername, useUserUpdate } from '../context/UserContext'

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
  const username = useUsername()
  const setUser = useUserUpdate()
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isEmailValid, setEmailValid] = React.useState(false)
  const [isVisited, setIsVisited] = React.useState(false)
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const shouldShowError = !isEmailValid && isVisited && !emailError

  const onEmailChange = ({ target: { value } }) => {
    setEmailValid(validateEmail(value))
    setEmail(value)
  }

  const clearForm = () => {
    setEmail('')
    setPassword('')
  }

  const clearError = () => {
    setEmailError('')
    setPasswordError('')
  }

  const login = (event) => {
  
    clearError()
    event.stopPropagation()
    event.preventDefault()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break
          case "auth/wrong-password":
            setPasswordError(err.message)
            break
        }
      })

  }

  function logout() {
    fire.auth().signOut()
  }

  function authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {

        setUser(user.uid)

        if (!emailError && !passwordError) {
          setLoggedIn(true)
          clearForm()
        }
      }
      else {
        setLoggedIn(false)
        setUser('')
      }
    })
  }

  React.useEffect(() => {
    authListener()
  }, [])


  return (

    <div className='contact-container'>
      <h1>ADMIN LOGIN</h1>
      {
        loggedIn === false && <form>
          <FormControl
            label={`${t("")}`}
            //error={ shouldShowError ? `${t("emailErreurMessage")}` : null }
            error={shouldShowError ? `${t("emailErreurMessage")}` : emailError}
          >
            <Input
              placeholder={`${t("Email")}`}
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

          <FormControl label={`${t("")}`}
            error={passwordError}>
            <Input
              placeholder={`${t("Password")}`}
              type='password'
              name="password"
              value={password}
              onChange={event => setPassword(event.currentTarget.value)}
              required
            />
          </FormControl>

          <Button onClick={event => {
            event.preventDefault()
            login(event)
          }}>Log In</Button>

        </form>
      }

      {loggedIn === true && <Button onClick={event => logout(event)} >Log out {username}</Button>}

    </div>

  )
}

export default Form