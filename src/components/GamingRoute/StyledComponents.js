import styled from 'styled-components'

export const GamingRouteContainer = styled.div`
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
export const GamingVideosContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  width: 100%;
  overflow-x: auto;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingMenuContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#ebebeb'};
  background-color: ;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  @media screen and (min-width: 567px) {
    padding-left: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 30px;
    padding-left: 50px;
  }
`
export const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-right: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e2e8f0'};
  @media screen and (min-width: 768px) {
    border-radius: 60px;
    margin-right: 30px;
    height: 80px;
    width: 80px;
  }
`
export const MenuHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const GamingVideosList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0px;
  @media screen and (min-width: 576px) {
    padding-left: 20px;
    align-items: flex-start;
    justify-content: flex-start;
  }
`
export const GamingFailureContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`
export const GamingFailureImg = styled.img`
  width: 60%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const GamingFailureTextHead = styled.h1`
  margin: 5px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const GamingFailureTextContent = styled.p`
  width: 90%;
  margin: 5px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#616e7c')};
  @media screen and (min-width: 768px) {
    width: 45%;
    margin-top: 20px;
    font-size: 19px;
  }
`
export const GamingFailureButton = styled.button`
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  border: none;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
`
export default styled
