import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.jsx'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink
} from './navigation.styles.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.select'
import { selectShowCartDropDown } from '../../store/cart/cart.selector'
import { signOutStart } from '../../store/user/user.action'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const showCartDropDown = useSelector(selectShowCartDropDown)
  const dispatch = useDispatch()
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink onClick={() => dispatch(signOutStart())}>SIGN OUT</NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {showCartDropDown && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
