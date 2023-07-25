import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ContextObject from '../../Context/ContextObject'

import './index.css'

import {
  VideoCardContainer,
  Thumbnail,
  ProfileImage,
  ThumbnailTextContainer,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
} from './StyledComponents'

const VideoItems = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    title,
    id,
    publishedAt,
  } = videoDetails

  const {name, profileImageUrl} = channel
  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <Link to={`/videos/${id}`} className="nav-link">
            <VideoCardContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailTextContainer>
                <div>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                </div>
                <VideoTextContainer>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <VideoDetailsContainer>
                    <VideoDetailsText theme={theme} listStyleType="none">
                      {name}
                    </VideoDetailsText>
                    <VideoDetailsContainer2>
                      <VideoDetailsText theme={theme}>
                        {viewCount} views
                      </VideoDetailsText>
                      <VideoDetailsText theme={theme}>
                        {postedAt} ago
                      </VideoDetailsText>
                    </VideoDetailsContainer2>
                  </VideoDetailsContainer>
                </VideoTextContainer>
              </ThumbnailTextContainer>
            </VideoCardContainer>
          </Link>
        )
      }}
    </ContextObject.Consumer>
  )
}

export default VideoItems
