import Header from '../Header'
import Sidebar from '../Sidebar'
import ContextObject from '../../Context/ContextObject'

import {
  NotFoundRouteContainer,
  ResponsiveContainer,
  SidebarContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTextHead,
  NotFoundTextContent,
} from './StyledComponents'

const NotFound = () => (
  <ContextObject.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      return (
        <NotFoundRouteContainer theme={theme}>
          <Header />
          <ResponsiveContainer>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <NotFoundContainer theme={theme}>
              <NotFoundImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundTextHead theme={theme}> Page Not Found</NotFoundTextHead>
              <NotFoundTextContent theme={theme}>
                we are sorry, the page you requested could not be found.
              </NotFoundTextContent>
            </NotFoundContainer>
          </ResponsiveContainer>
        </NotFoundRouteContainer>
      )
    }}
  </ContextObject.Consumer>
)

export default NotFound
