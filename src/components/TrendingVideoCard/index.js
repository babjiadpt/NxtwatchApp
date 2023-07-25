import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ContextObject from '../../Context/ContextObject'

import {
  VideoCardContainer,
  Thumbnail,
  ChannelLogo,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
  VideoDetailsText,
  VideoDetailsText1,
} from './StyledComponents'

const TrendingVideoCard = props => {
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
        const {changeActiveMenu, isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <Link
            to={`/videos/${id}`}
            className="link"
            onClick={() => changeActiveMenu('INITIAL')}
          >
            <VideoCardContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailText>
                <div>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                </div>
                <VideoTextContainer>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <VideoDetailsContainer>
                    <VideoDetailsText1 theme={theme}>{name}</VideoDetailsText1>
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
              </ThumbnailText>
            </VideoCardContainer>
          </Link>
        )
      }}
    </ContextObject.Consumer>
  )
}

export default TrendingVideoCard
