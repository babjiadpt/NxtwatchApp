import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  SavedVideosRouteContainer,
  ResponsiveContainer,
  SavedVideosContainer,
  SavedMenuContainer,
  IconContainer,
  MenuHeading,
  SavedVideosList,
  NoSavedVideosContainer,
  NoSavedVideosImg,
  NoSavedVideosTextHead,
  NoSavedVideosTextContent,
} from './StyledComponents'

import ContextObject from '../../Context/ContextObject'

const SavedVideosRoute = () => {
  const savedList = themeValue => {
    const {isDarkTheme, savedVideosList} = themeValue
    const theme = isDarkTheme ? 'dark' : 'light'

    return (
      <>
        {savedVideosList.length === 0 ? (
          <NoSavedVideosContainer data-testid="savedVideos">
            <NoSavedVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
              alt="no saved videos"
            />
            <NoSavedVideosTextHead theme={theme}>
              No saved videos found
            </NoSavedVideosTextHead>
            <NoSavedVideosTextContent theme={theme}>
              You can save your videos while watching them
            </NoSavedVideosTextContent>
          </NoSavedVideosContainer>
        ) : (
          <>
            <SavedMenuContainer theme={theme}>
              <IconContainer theme={theme}>
                <HiFire size={30} color="#ff0b37" />
              </IconContainer>
              <MenuHeading theme={theme}>Saved Videos</MenuHeading>
            </SavedMenuContainer>
            <SavedVideosList>
              {savedVideosList.map(each => (
                <TrendingVideoCard videoDetails={each} key={each.id} />
              ))}
            </SavedVideosList>
          </>
        )}
      </>
    )
  }

  return (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value

        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <SavedVideosRouteContainer theme={theme} data-testid="savedVideos">
            <Header />
            <ResponsiveContainer data-testid="home">
              <Sidebar />
              <SavedVideosContainer theme={theme} data-testid="savedVideos">
                {savedList(value)}
              </SavedVideosContainer>
            </ResponsiveContainer>
          </SavedVideosRouteContainer>
        )
      }}
    </ContextObject.Consumer>
  )
}

export default SavedVideosRoute
