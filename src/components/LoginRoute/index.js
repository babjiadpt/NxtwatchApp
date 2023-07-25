import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ContextObject from '../../Context/ContextObject'

import {
  LoginRouteContainer,
  CardContainer,
  Image,
  FormContainer,
  InputContainer,
  Label,
  Input,
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxLabel,
  CustomButton,
  ShowError,
} from './StyledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    msgError: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({
      showSubmitError: true,
      msgError: error,
      username: '',
      password: '',
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckBox = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showSubmitError,
      msgError,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'Dark' : 'light'

          return (
            <LoginRouteContainer mode={theme}>
              <CardContainer mode={theme}>
                <Image
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <Label htmlFor="username" mode={theme}>
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUsername}
                      mode={theme}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="password" mode={theme}>
                      PASSWORD
                    </Label>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                      mode={theme}
                    />
                  </InputContainer>
                  <CheckBoxContainer>
                    <CheckBoxInput
                      type="checkbox"
                      id="showPassword"
                      onClick={this.onClickCheckBox}
                    />
                    <CheckBoxLabel htmlFor="showPassword" mode={theme}>
                      Show Password
                    </CheckBoxLabel>
                  </CheckBoxContainer>
                  <CustomButton type="submit">Login</CustomButton>
                  {showSubmitError && (
                    <ShowError mode={theme}>*{msgError}</ShowError>
                  )}
                </FormContainer>
              </CardContainer>
            </LoginRouteContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default LoginRoute
