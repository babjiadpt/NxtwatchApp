import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoLogoGameControllerB} from 'react-icons/io'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GameVideoItems from '../GameVideoItems'
import ContextObject from '../../Context/ContextObject'

import {
  GamingRouteContainer,
  ResponsiveContainer,
  GamingVideosContainer,
  LoaderContainer,
  GamingMenuContainer,
  IconContainer,
  MenuHeading,
  GamingVideosList,
  GamingFailureContainer,
  GamingFailureImg,
  GamingFailureTextHead,
  GamingFailureTextContent,
  GamingFailureButton,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <>
              <GamingMenuContainer theme={theme}>
                <IconContainer theme={theme}>
                  <IoLogoGameControllerB size={40} color="#ff0b37" />
                </IconContainer>
                <MenuHeading theme={theme}>Gaming</MenuHeading>
              </GamingMenuContainer>
              <GamingVideosList>
                {videosList.map(each => (
                  <GameVideoItems key={each.id} videoDetails={each} />
                ))}
              </GamingVideosList>
            </>
          )
        }}
      </ContextObject.Consumer>
    )
  }

  renderFailureView = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        const gamingFailureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <GamingFailureContainer>
            <GamingFailureImg src={gamingFailureImage} alt="failure view" />
            <GamingFailureTextHead theme={theme}>
              Oops! Something Went Wrong
            </GamingFailureTextHead>
            <GamingFailureTextContent theme={theme}>
              We are having some trouble to complete your request. Please try
              again
            </GamingFailureTextContent>
            <GamingFailureButton onClick={this.getGamingVideos}>
              Retry
            </GamingFailureButton>
          </GamingFailureContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  renderLoaderView = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#0b69ff'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <GamingRouteContainer data-testid="gaming" theme={theme}>
              <Header />
              <ResponsiveContainer data-testid="home">
                <Sidebar />
                <GamingVideosContainer theme={theme}>
                  {this.renderApiStatus()}
                </GamingVideosContainer>
              </ResponsiveContainer>
            </GamingRouteContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default GamingRoute
