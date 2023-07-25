import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'
import ContextObject from '../../Context/ContextObject'

import {
  VideoItemDetailsRouteContainer,
  ResponsiveContainer,
  VideoItemDetailsContainer,
  LoaderContainer,
  PlayerContainer,
  VideoTextContainer,
  VideoTitle,
  ViewsAndPostedContainer,
  LikesAndViewsContainer,
  ViewsText,
  LIkeButtonContainer,
  Button,
  ChannelLogo,
  ChannelDetails,
  ChannelDetailsText,
  ChannelDetailsText2,
  VideoDescriptionText,
  VidFailureContainer,
  VidFailureImg,
  VidFailureTextHead,
  VidFailureTextContent,
  VidFailureButton,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = {
        videoDetails: data.video_details,
      }
      const {videoDetails} = updatedData
      const updated = {
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updated,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateLikeState = () => {
    this.setState(prev => ({like: !prev.like, dislike: false}))
  }

  updateDislikeState = () => {
    this.setState(prev => ({dislike: !prev.dislike, like: false}))
  }

  renderSuccessView = () => {
    const {videoDetails, like, dislike} = this.state

    const {
      publishedAt,
      title,
      videoUrl,
      viewCount,
      channel,
      description,
      id,
    } = videoDetails

    const {name, profileImageUrl, subscriberCount} = channel
    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme, updateSave, savedVideosList} = value
          const theme = isDarkTheme ? 'dark' : 'light'

          const likeIsActive = like ? 'active' : 'not-active'
          const dislikeIsActive = dislike ? 'active' : 'not-active'

          const present = savedVideosList.find(each => each.id === id)
          const saveIsActive = present !== undefined ? 'active' : 'not-active'
          const saveText = present !== undefined ? 'Saved' : 'Save'
          return (
            <>
              <PlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </PlayerContainer>
              <VideoTextContainer>
                <VideoTitle theme={theme}>{title}</VideoTitle>
                <LikesAndViewsContainer>
                  <ViewsAndPostedContainer>
                    <ViewsText>{viewCount} views</ViewsText>
                    <ViewsText>{postedAt} ago</ViewsText>
                  </ViewsAndPostedContainer>
                  <div>
                    <LIkeButtonContainer>
                      <Button
                        type="button"
                        theme={likeIsActive}
                        onClick={this.updateLikeState}
                      >
                        <BiLike size={20} style={{marginTop: '6px'}} />
                        Like
                      </Button>
                      <Button
                        type="button"
                        theme={dislikeIsActive}
                        onClick={this.updateDislikeState}
                      >
                        <BiDislike size={20} style={{marginTop: '6px'}} />
                        Dislike
                      </Button>
                      <Button
                        type="button"
                        theme={saveIsActive}
                        onClick={() => updateSave(videoDetails)}
                      >
                        <RiMenuAddLine size={20} style={{marginTop: '6px'}} />
                        {saveText}
                      </Button>
                    </LIkeButtonContainer>
                  </div>
                </LikesAndViewsContainer>
                <hr />
                <ChannelDetails>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ChannelDetailsText theme={theme}>
                      {name}
                    </ChannelDetailsText>
                    <ChannelDetailsText2>
                      {subscriberCount} Subscribers
                    </ChannelDetailsText2>
                  </div>
                </ChannelDetails>
                <VideoDescriptionText theme={theme}>
                  {description}
                </VideoDescriptionText>
              </VideoTextContainer>
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
        const VidFailureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <VidFailureContainer>
            <VidFailureImg src={VidFailureImage} alt="failure view" />
            <VidFailureTextHead theme={theme}>
              Oops! Something Went Wrong
            </VidFailureTextHead>
            <VidFailureTextContent theme={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </VidFailureTextContent>
            <VidFailureButton onClick={this.getVideoItemDetails}>
              Retry
            </VidFailureButton>
          </VidFailureContainer>
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
            <VideoItemDetailsRouteContainer
              data-testid="videoItemDetails"
              theme={theme}
            >
              <Header />
              <ResponsiveContainer data-testid="home">
                <Sidebar />
                <VideoItemDetailsContainer
                  theme={theme}
                  data-testid="videoItemDetails"
                >
                  {this.renderApiStatus()}
                </VideoItemDetailsContainer>
              </ResponsiveContainer>
            </VideoItemDetailsRouteContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default VideoItemDetails
