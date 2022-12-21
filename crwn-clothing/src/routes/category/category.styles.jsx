import styled from 'styled-components'
import { device } from '../../styles/devices'
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media ${device.phone} {
    padding: 0 50px;
    grid-template-columns: 100%;
    row-gap: 30px;
  }

  @media ${device.tabletPortrait} {
    padding: 0 40px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 30px;
  }

  @media ${device.tabletLandscape} {
    padding: 0 20px;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 15px;
  }
`
export const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
  @media ${device.phone} {
    padding: 0 50px;
  }
  @media ${device.tabletPortrait} {
    padding: 0 40px;
  }
  @media ${device.tabletLandscape} {
    padding: 0 20px;
  }
`
