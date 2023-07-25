import styled from 'styled-components'

export const VideoItemDetailsRouteContainer = styled.div`
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
export const VideoItemDetailsContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PlayerContainer = styled.div`
  height: 260px;
  @media screen and (min-width: 768px) {
    height: 450px;
    padding: 0px 20px 0px 20px;
  }
`
export const VideoTextContainer = styled.div`
  padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.theme === 'dark' ? '#f8fafc' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 300;
  }
`
export const LikesAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
  }
`
export const ViewsAndPostedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ViewsText = styled.p`
  margin: 0px 10px 0px 0px;
  font-family: 'Roboto';
  font-size: 13px;
  color: #64748b;
  font-weight: 400;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const LIkeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 14px;
  padding-left: 10px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`
export const ChannelLogo = styled.img`
  width: 50px;
`
export const ChannelDetailsText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#0f0f0f')};
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    font-weight: ${props => (props.theme === 'dark' ? '300' : '400')};
  }
`
export const ChannelDetailsText2 = styled(ChannelDetailsText)`
  color: #64748b;
`
export const VideoDescriptionText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: ${props => (props.theme ? '300' : '400')};
  line-height: 1.5;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#64748b;')};
  @media screen and (min-width: 768px) {
    padding-left: 65px;
    font-size: 15px;
    font-weight: 400;
  }
`
export const VidFailureContainer = styled.div`
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
export const VidFailureImg = styled.img`
  width: 60%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const VidFailureTextHead = styled.h1`
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
export const VidFailureTextContent = styled.p`
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
export const VidFailureButton = styled.button`
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
