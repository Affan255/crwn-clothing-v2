import styled from 'styled-components'
import { device } from '../../styles/devices'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media ${device.phone} {
    width: 80%;
    margin: auto;
  }
  @media ${device.tabletPortrait} {
    width: 90%;
    margin: auto;
  }
  @media ${device.tabletLandscape} {
    width: 95%;
    margin: auto;
  }
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media ${device.phone} {
    padding: 15px;
  }
  @media ${device.tabletPortrait} {
    padding: 18px;
  }
  @media ${device.tabletLandscape} {
    padding: 21px;
  }
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media ${device.phone} {
    padding: 3px 6px;
  }
`
