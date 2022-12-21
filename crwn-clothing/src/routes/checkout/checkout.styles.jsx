import styled from 'styled-components'
import { device } from '../../styles/devices'

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media ${device.phone} {
    width: 100%;
  }

  @media ${device.tabletPortrait} {
    width: 80%;
  }

  @media ${device.tabletLandscape} {
    width: 75%;
  }
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media ${device.phone} {
    font-size: 16px;
  }
  @media ${device.tabletPortrait} {
    font-size: 18px;
  }
  @media ${device.tabletLandscape} {
    font-size: 19px;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media ${device.phone} {
    font-size: 20px;
  }

  @media ${device.tabletPortrait} {
    font-size: 25px;
  }

  @media ${device.tabletLandscape} {
    font-size: 30px;
  }
`
