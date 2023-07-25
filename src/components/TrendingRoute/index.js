import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideoCard from '../TrendingVideoCard'
import ContextObject from '../../Context/ContextObject'

import {
  TrendingRouteContainer,
  ResponsiveContainer,
  TrendingVideosContainer,
  LoaderContainer,
  TrendingMenuContainer,
  IconContainer,
  MenuHeading,
  TrendingVideosList,
  TrendingFailureContainer,
  TrendingFailureImg,
  TrendingFailureTextHead,
  TrendingFailureTextContent,
  TrendingFailureButton,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
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
              <TrendingMenuContainer theme={theme}>
                <IconContainer theme={theme}>
                  <HiFire size={30} color="#ff0b37" />
                </IconContainer>
                <MenuHeading theme={theme}>Trending</MenuHeading>
              </TrendingMenuContainer>
              <TrendingVideosList>
                {videosList.map(each => (
                  <TrendingVideoCard videoDetails={each} key={each.id} />
                ))}
              </TrendingVideosList>
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
        const TrendingFailureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <TrendingFailureContainer>
            <TrendingFailureImg src={TrendingFailureImage} alt="failure view" />
            <TrendingFailureTextHead theme={theme}>
              Oops! Something Went Wrong
            </TrendingFailureTextHead>
            <TrendingFailureTextContent theme={theme}>
              We are having some trouble to complete your request. Please try
              again
            </TrendingFailureTextContent>
            <TrendingFailureButton onClick={this.getTrendingVideos}>
              Retry
            </TrendingFailureButton>
          </TrendingFailureContainer>
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
            <TrendingRouteContainer data-testid="trending" theme={theme}>
              <Header />
              <ResponsiveContainer data-testid="home">
                <Sidebar />
                <TrendingVideosContainer theme={theme} data-testid="trending">
                  {this.renderApiStatus()}
                </TrendingVideosContainer>
              </ResponsiveContainer>
            </TrendingRouteContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default TrendingRoute
