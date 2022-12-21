import styled from 'styled-components'
import { device } from '../../styles/devices'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
export const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  @media ${device.phone} {
    grid-template-columns: 100%;
  }
  @media ${device.tabletPortrait} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
  @media ${device.tabletLandscape} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
`
