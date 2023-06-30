
import styled from 'styled-components'

export const Passo = styled.div`
  display: flex;
  gap: .8vw;

  > p {
    color: white;
  }
`

export const Circulo = styled.div`
  display: flex;
  border-radius: 50%;
  background: ${props => props.active == 'true' ? 'hsl(206, 94%, 87%)': 'transparent'};
  border: ${props => props.active == 'true' ? '2px solid hsl(206, 94%, 87%)': '2px solid white'};
  height: 110%;
  width: 2.2vw;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${props => props.active == 'true' ? 'hsl(213, 96%, 18%)' : 'white'};
  font-size: 0.85em;

  &:hover {
    cursor: pointer;
  }
`