import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner
} from './button.styles.jsx'
export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
  }[buttonType])

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButtom = getButton(buttonType)
  return (
    <CustomButtom disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButtom>
  )
}
export default Button
