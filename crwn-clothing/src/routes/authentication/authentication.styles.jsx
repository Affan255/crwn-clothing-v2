import styled from 'styled-components'
import { device } from '../../styles/devices'

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 30px auto;

  @media ${device.phone} {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  @media ${device.tabletPortrait} {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`
