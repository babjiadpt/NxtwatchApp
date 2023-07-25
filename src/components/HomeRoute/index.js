import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItems from '../VideoItems'

import {
  HomeRouteContainer,
  ResponsiveContainer,
  HomeVideosContainer,
  GetPremiumContainer,
  CloseButton,
  Content,
  BannerLogo,
  GetItButton,
  BannerText,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  VideosList,
  HomeFailureContainer,
  HomeFailureImg,
  HomeFailureTextHead,
  HomeFailureTextContent,
  HomeFailureButton,
  NoVideosContainer,
  NoVideosImg,
} from './StyledComponents'

import ContextObject from '../../Context/ContextObject'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    popup: true,
    videosList: [],
  }

  componentDidMount = () => {
    this.getHomeRouteVideos()
  }

  getHomeRouteVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
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
        searchInput: '',
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickCloseBanner = () => {
    this.setState({popup: false})
  }

  renderPremiumPlan = () => (
    <GetPremiumContainer data-testid="banner">
      <CloseButton
        type="button"
        data-testid="close"
        onClick={this.onClickCloseBanner}
      >
        <IoMdClose size={16} />
      </CloseButton>
      <Content>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetItButton>GET IT NOW </GetItButton>
      </Content>
    </GetPremiumContainer>
  )

  renderLoader = () => (
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

  renderNoVideosView = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HomeFailureTextHead theme={theme}>
              No Search results found
            </HomeFailureTextHead>
            <HomeFailureTextContent theme={theme}>
              Try different key words or remove search filter
            </HomeFailureTextContent>
            <HomeFailureButton type="button" onClick={this.getHomeRouteVideos}>
              Retry
            </HomeFailureButton>
          </NoVideosContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length === 0 ? (
          this.renderNoVideosView()
        ) : (
          <VideosList>
            {videosList.map(eachVideo => (
              <VideoItems videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </VideosList>
        )}
      </>
    )
  }

  renderFailureView = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        const HomeFailureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <HomeFailureContainer>
            <HomeFailureImg src={HomeFailureImage} alt="failure view" />
            <HomeFailureTextContent theme={theme}>
              <HomeFailureTextHead theme={theme}>
                Oops! Something Went Wrong
              </HomeFailureTextHead>
              We are having some trouble to complete your request. Please try
              again
            </HomeFailureTextContent>
            <HomeFailureButton onClick={this.getHomeRouteVideos}>
              Retry
            </HomeFailureButton>
          </HomeFailureContainer>
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
        return this.renderLoader()

      default:
        return null
    }
  }

  render() {
    const {popup, searchInput} = this.state
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const color = isDarkTheme ? '#909090' : '#383838'
          return (
            <HomeRouteContainer theme={theme} data-testid="home">
              <Header />
              <ResponsiveContainer data-testid="home">
                <Sidebar />
                <HomeVideosContainer theme={theme} data-testid="home">
                  {popup && this.renderPremiumPlan()}
                  <SearchContainer theme={theme}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      value={searchInput}
                      theme={theme}
                    />
                    <SearchButton
                      type="button"
                      onClick={this.getHomeRouteVideos}
                      data-testid="searchButton"
                      theme={theme}
                    >
                      <BsSearch color={color} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderApiStatus()}
                </HomeVideosContainer>
              </ResponsiveContainer>
            </HomeRouteContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default HomeRoute
