import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddLine} from 'react-icons/ri'

import ContextObject from '../../Context/ContextObject'
import {
  SidebarContainer,
  MenuList,
  MenuLink,
  MenuHeading,
  LogoIcons,
  ContactUsContainer,
  Heading,
  Content,
} from './StyledComponents'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class Sidebar extends Component {
  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme, activeMenu, changeActiveMenu} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const iconColor = isDarkTheme ? '#424242' : '#7e858e'
          const iconActive = '#ff0b37'

          return (
            <SidebarContainer theme={theme}>
              <MenuList>
                <Link to="/" className="link">
                  <MenuLink
                    theme={theme}
                    isActive={activeMenu === activeMenuConstants.home}
                    onClick={() => changeActiveMenu(activeMenuConstants.home)}
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
                      isActive={activeMenu === activeMenuConstants.trending}
                    >
                      Trending
                    </MenuHeading>
                  </MenuLink>
                </Link>
                <Link to="/gaming" className="link">
                  <MenuLink
                    theme={theme}
                    isActive={activeMenu === activeMenuConstants.gaming}
                    onClick={() => changeActiveMenu(activeMenuConstants.gaming)}
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
                    isActive={activeMenu === activeMenuConstants.savedVideos}
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
                      isActive={activeMenu === activeMenuConstants.savedVideos}
                    >
                      Saved videos
                    </MenuHeading>
                  </MenuLink>
                </Link>
              </MenuList>
              <ContactUsContainer>
                <Heading theme={theme}>CONTACT US</Heading>
                <div>
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <Content theme={theme}>
                  Enjoy! Now to see your channels and recommendations!
                </Content>
              </ContactUsContainer>
            </SidebarContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default Sidebar
