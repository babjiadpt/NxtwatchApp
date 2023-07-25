import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    margin-bottom: 30px;
    padding-left: 20px;
    padding-top: 20px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const ThumbnailText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const ChannelLogo = styled.img`
  width: 40px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? 'white' : '#1e293b')};
  font-weight: ${props => (props.theme === 'dark' ? '400' : '600')};
  line-height: 1.5;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 2;
  }
`
export const VideoTextContainer = styled.div`
  margin-left: 5px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const VideoDetailsContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
  font-weight: 400;
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  @media screen and (min-width: 567px) {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const VideoDetailsText1 = styled(VideoDetailsText)`
  @media screen and (min-width: 567px) {
    font-size: 14px;
    @media screen and (min-width: 768px) {
      margin-bottom: 10px;
    }
  }
`

export default styled
