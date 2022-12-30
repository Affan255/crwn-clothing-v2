import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  emailSignInStart,
  googleSignInStart
} from '../../store/user/user.action'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import FormInput from '../form-input/form-input.component'

import { ButtonsContainer, SignInContainer } from './sign-in-form.styles.jsx'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const signInWithGoogle = () => {
    dispatch(googleSignInStart())
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(emailSignInStart(email, password))
    resetFormFields()
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          label='Email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          type='password'
          label='Password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
