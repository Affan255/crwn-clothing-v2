import styled, { css } from 'styled-components'
import { device } from '../../styles/devices'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media ${device.phone} {
    font-size: 16px;
    min-height: 60px;
    padding: 5px 0;
  }

  @media ${device.tabletPortrait} {
    font-size: 17px;
    min-height: 70px;
    padding: 8px 0;
  }

  @media ${device.tabletLandscape} {
    font-size: 19px;
    min-height: 80px;
    padding: 10px 0;
  }
`
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`
const textStyles = css`
  width: 23%;

  @media ${device.phone} {
    width: 33%;
  }
  @media ${device.tabletPortrait} {
    width: 30%;
  }
  @media ${device.tabletLandscape} {
    width: 27%;
  }
`
export const Arrow = styled.div`
  cursor: pointer;
`
export const Value = styled.span`
  margin: 0 10px;
  @media ${device.phone} {
    margin: 0 2px;
  }
  @media ${device.tabletPortrait} {
    margin: 0 4px;
  }
  @media ${device.tabletLandscape} {
    margin: 0 7px;
  }
`
export const Name = styled.span`
  ${textStyles}
`
export const Price = styled.span`
  ${textStyles}
`

export const Quantity = styled.span`
  display: flex;
  ${textStyles},
`
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  @media ${device.phone} {
    padding-left: 0;
  }
  @media ${device.tabletPortrait} {
    padding-left: 5px;
  }
  @media ${device.tabletLandscape} {
    padding-left: 8px;
  }
`
