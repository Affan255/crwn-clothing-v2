import { Outlet } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.jsx'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../contexts/cart.context'
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink
} from './navigation.styles.jsx'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { showCartDropDown } = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink  to='/auth'>
              SIGN IN
            </NavLink>
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
