import {Link} from 'react-router-dom'

import ContextObject from '../../Context/ContextObject'

import {
  GameCardContainer,
  Thumbnail,
  GameTextContainer,
  GameTitle,
  GameViews,
} from './StyledComponents'

const GameVideoItems = props => {
  const {videoDetails} = props
  const {thumbnailUrl, viewCount, title, id} = videoDetails

  return (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme, changeActiveMenu} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <GameCardContainer>
            <Link
              to={`/videos/${id}`}
              className="link"
              onClick={() => changeActiveMenu('INITIAL')}
            >
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameTextContainer>
                <GameTitle theme={theme}>{title}</GameTitle>
                <GameViews>{viewCount} Watching Worldwide</GameViews>
              </GameTextContainer>
            </Link>
          </GameCardContainer>
        )
      }}
    </ContextObject.Consumer>
  )
}

export default GameVideoItems
