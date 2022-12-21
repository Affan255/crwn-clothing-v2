import styled from 'styled-components'
import { device } from '../../styles/devices'

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    @media ${device.phone} {
      height: 80%;
    }
    @media ${device.tabletPortrait} {
      height: 90%;
    }
    @media ${device.tabletLandscape} {
      height: 90%;
    }
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    @media ${device.phone} {
      top: 200px;
    }
    @media ${device.tabletPortrait} {
      top: 240px;
    }
  }
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`
export const Price = styled.span`
  width: 10%;
`
export const Footer = styled.div`
  width: 80%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`
