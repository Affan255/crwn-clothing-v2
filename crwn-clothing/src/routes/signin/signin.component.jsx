import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'

const Signin = () => {
    // useEffect(() => {
    //   const getRedirect = async () => {
    //     const response = await getRedirectResult(auth)
    //     if (response) {
    //       const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    //   }
    //   getRedirect()
    // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
      <SignUpForm />
    </div>
  )
}

export default Signin
