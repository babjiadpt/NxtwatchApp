import styled from 'styled-components'

export const GameCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 10px;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 30%;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
    flex-direction: row;
    margin: 20px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const GameTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#181818')};
  font-weight: ${props => (props.theme === 'dark' ? '400' : '700')};
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const GameViews = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#475569')};
  font-weight: 400;
  width: 100px;
  margin-top: 5px;
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    width: 100%;
    font-size: 16px;
  }
`
export default styled
