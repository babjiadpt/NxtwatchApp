import styled from 'styled-components'

export const SavedVideosRouteContainer = styled.div`
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
export const SavedVideosContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  min-height: 100vh;
  width: 100%;
`
export const SavedMenuContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#ebebeb'};
  background-color: ;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px;
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
export const SavedVideosList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media screen (min-width: 768px) {
    width: 80%;
  }
`
export const NoSavedVideosContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`
export const NoSavedVideosImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const NoSavedVideosTextHead = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#1e293b')};
  font-weight: ${props => (props.theme === 'dark' ? '500' : '600')};
  margin-top: 40px;
`
export const NoSavedVideosTextContent = styled.p`
  font-family: 'Roboto';
  font-weight: ${props => (props.theme === 'dark' ? '300' : '500')};
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? '#f1f5f9' : ' #313131')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    color: ${props => (props.theme === 'dark' ? '#f1f5f9' : '#383838')};
  }
`

export default styled
