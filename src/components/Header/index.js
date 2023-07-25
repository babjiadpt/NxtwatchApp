import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose, IoLogoGameControllerB} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {RiMenuAddLine} from 'react-icons/ri'

import ContextObject from '../../Context/ContextObject'

import {
  HeaderContainer,
  WebsiteLogo,
  MobileViewNavIconsContainer,
  ListItem,
  ThemeButton,
  IconButton,
  MenuPopupMobile,
  NavCloseButton,
  MenuListMobile,
  MenuLink,
  MenuHeading,
  LogoutPopupContainer,
  LogoutPopupContent,
  ButtonsContainer,
  PopupCloseButton,
  PopupConfirmButton,
  DesktopViewNavIConsContainer,
  ProfileIcon,
  DesktopLogoutIcon,
} from './StyledComponents'

import './index.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const Header = props => (
  <ContextObject.Consumer>
    {value => {
      const {isDarkTheme, changeTheme, activeMenu, changeActiveMenu} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      const iconColor = isDarkTheme ? '#424242' : '#7e858e'
      const iconActive = '#ff0b37'
      const color = isDarkTheme ? 'white' : 'black'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer theme={theme}>
          <Link to="/">
            <WebsiteLogo
              src={websiteLogo}
              alt="website logo"
              onClick={() => changeActiveMenu('HOME')}
            />
          </Link>
          <MobileViewNavIconsContainer>
            <ListItem>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={() => changeTheme()}
              >
                {isDarkTheme ? (
                  <FiSun color="white" size={25} />
                ) : (
                  <FaMoon size={25} />
                )}
              </ThemeButton>
            </ListItem>
            <ListItem>
              <Popup
                modal
                trigger={
                  <IconButton type="button" data-testid="theme">
                    <GiHamburgerMenu color={color} size={25} />
                  </IconButton>
                }
                className="popup-content"
              >
                {close => (
                  <MenuPopupMobile theme={theme}>
                    <NavCloseButton
                      type="button"
                      data-testid="theme"
                      onClick={() => close()}
                    >
                      <IoMdClose size={25} color={color} />
                    </NavCloseButton>
                    <MenuListMobile>
                      <Link to="/" className="link">
                        <MenuLink
                          theme={theme}
                          isActive={activeMenu === activeMenuConstants.home}
                          onClick={() =>
                            changeActiveMenu(activeMenuConstants.home)
                          }
                          key="HOME"
                        >
                          <AiFillHome
                            size={18}
                            color={
                              activeMenu === activeMenuConstants.home
                                ? iconActive
                                : iconColor
                            }
                          />
                          <MenuHeading
                            theme={theme}
                            isActive={activeMenu === activeMenuConstants.home}
                          >
                            Home
                          </MenuHeading>
                        </MenuLink>
                      </Link>
                      <Link to="/trending" className="link">
                        <MenuLink
                          theme={theme}
                          isActive={activeMenu === activeMenuConstants.trending}
                          onClick={() =>
                            changeActiveMenu(activeMenuConstants.trending)
                          }
                          key="TRENDING"
                        >
                          <HiFire
                            size={18}
                            color={
                              activeMenu === activeMenuConstants.trending
                                ? iconActive
                                : iconColor
                            }
                          />
                          <MenuHeading
                            theme={theme}
                            isActive={
                              activeMenu === activeMenuConstants.trending
                            }
                          >
                            Trending
                          </MenuHeading>
                        </MenuLink>
                      </Link>
                      <Link to="/gaming" className="link">
                        <MenuLink
                          theme={theme}
                          isActive={activeMenu === activeMenuConstants.gaming}
                          onClick={() =>
                            changeActiveMenu(activeMenuConstants.gaming)
                          }
                          key="GAMING"
                        >
                          <IoLogoGameControllerB
                            size={18}
                            color={
                              activeMenu === activeMenuConstants.gaming
                                ? iconActive
                                : iconColor
                            }
                          />
                          <MenuHeading
                            theme={theme}
                            isActive={activeMenu === activeMenuConstants.gaming}
                          >
                            Gaming
                          </MenuHeading>
                        </MenuLink>
                      </Link>
                      <Link to="/saved-videos" className="link">
                        <MenuLink
                          theme={theme}
                          isActive={
                            activeMenu === activeMenuConstants.savedVideos
                          }
                          onClick={() =>
                            changeActiveMenu(activeMenuConstants.savedVideos)
                          }
                          key="SAVED_VIDEOS"
                        >
                          <RiMenuAddLine
                            size={18}
                            color={
                              activeMenu === activeMenuConstants.savedVideos
                                ? iconActive
                                : iconColor
                            }
                          />
                          <MenuHeading
                            theme={theme}
                            isActive={
                              activeMenu === activeMenuConstants.savedVideos
                            }
                          >
                            Saved videos
                          </MenuHeading>
                        </MenuLink>
                      </Link>
                    </MenuListMobile>
                  </MenuPopupMobile>
                )}
              </Popup>
            </ListItem>
            <ListItem>
              <Popup
                modal
                trigger={
                  <IconButton type="button" data-testid="theme">
                    <FiLogOut color={color} size={25} />
                  </IconButton>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutPopupContainer theme={theme}>
                    <LogoutPopupContent theme={theme}>
                      Are you sure, you want to logout
                    </LogoutPopupContent>
                    <ButtonsContainer>
                      <PopupCloseButton
                        type="button"
                        theme={theme}
                        data-testid="theme"
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupCloseButton>
                      <PopupConfirmButton
                        type="button"
                        data-testid="theme"
                        onClick={() => onClickLogout()}
                      >
                        Confirm
                      </PopupConfirmButton>
                    </ButtonsContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </ListItem>
          </MobileViewNavIconsContainer>
          <DesktopViewNavIConsContainer>
            <ListItem>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={() => changeTheme()}
              >
                {isDarkTheme ? (
                  <FiSun color="white" size={25} />
                ) : (
                  <FaMoon size={25} />
                )}
              </ThemeButton>
            </ListItem>
            <ListItem>
              <ProfileIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ListItem>
            <ListItem>
              <Popup
                modal
                trigger={
                  <DesktopLogoutIcon type="button" data-testid="theme">
                    Logout
                  </DesktopLogoutIcon>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutPopupContainer theme={theme}>
                    <LogoutPopupContent theme={theme}>
                      Are you sure, you want to logout
                    </LogoutPopupContent>
                    <ButtonsContainer>
                      <PopupCloseButton
                        type="button"
                        theme={theme}
                        onClick={() => close()}
                        data-testid="theme"
                      >
                        Cancel
                      </PopupCloseButton>
                      <PopupConfirmButton
                        type="button"
                        onClick={() => onClickLogout()}
                        data-testid="theme"
                      >
                        Confirm
                      </PopupConfirmButton>
                    </ButtonsContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </ListItem>
          </DesktopViewNavIConsContainer>
        </HeaderContainer>
      )
    }}
  </ContextObject.Consumer>
)

export default withRouter(Header)
