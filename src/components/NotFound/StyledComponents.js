import styled from 'styled-components'

export const NotFoundRouteContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const NotFoundContainer = styled.div`
  height: 100vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 70%;
    flex-grow: 1;
  }
`
export const NotFoundImage = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const NotFoundTextHead = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 40px;
    font-weight: 500;
  }
`
export const NotFoundTextContent = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  width: 300px;
  margin: 0px;
  color: ${props => (props.theme === 'dark' ? '#cbd5e1' : '#64748b')};
  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`
export default styled
