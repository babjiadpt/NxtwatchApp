import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 260px;
    height: 350px;
    margin-top: 20px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 330px;
    height: 350px;
    margin-right: 20px;
    margin-top: 20px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const ThumbnailTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`

export const ProfileImage = styled.img`
  width: 40px;
`
export const VideoTextContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  color: ${props => (props.theme === 'dark' ? 'white' : '#1e293b')};
  margin: 0px;
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
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
