import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const HomeVideosContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
  }
`
export const GetPremiumContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const BannerLogo = styled.img`
  width: 150px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
`
export const GetItButton = styled.button`
  background-color: transparent;
  width: 120px;
  height: 40px;
  font-family: 'Roboto';
  color: '#212121';
  font-size: 16px;
  font-weight: 700;
  border: 1px solid 'black';
  outline: none;
`
export const VideosListContainer = styled.div`
  @media screen and (min-width: 576px) {
    padding-left: 20px;
    padding-top: 20px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
  margin: 20px;
  margin-bottom: 0px;
  border: 1px solid ${props => (props.theme === 'dark' ? '#424242' : '#94a3b8')};
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 70%;
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-top: 20px;
  }
`
export const SearchInput = styled.input`
  height: 30px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#181818')};
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#ffffff'};
  font-size: 14px;
  font-weight: 400;
  flex-grow: 1;
  padding-left: 10px;
  border: none;
  outline: none;
`

export const SearchButton = styled.button`
  height: 30px;
  width: 50px;
  background-color: ${props =>
    props.theme === 'dark' ? '#424242' : 'transparent'};
  font-size: 14px;
  border-left: 1px solid
    ${props => (props.theme === 'dark' ? '#424242' : '#94a3b8')};
  padding-top: 4px;
  border-top: none;
  border-right: none;
  border-bottom: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  @media screen and (max-width: 767px) {
    height: 300px;
  }
`
export const VideosList = styled.ul`
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const HomeFailureContainer = styled.div`
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
export const HomeFailureImg = styled.img`
  width: 60%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const HomeFailureTextHead = styled.h1`
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
export const HomeFailureTextContent = styled.p`
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
export const HomeFailureButton = styled.button`
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
export const NoVideosContainer = styled(HomeFailureContainer)``

export const NoVideosImg = styled(HomeFailureImg)``

export default styled
