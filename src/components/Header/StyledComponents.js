import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
export const MobileViewNavIconsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ListItem = styled.li`
  list-style-type: none;
  margin: 0px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0px;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
export const MenuPopupMobile = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  @media screen and (min-width: 500px) and (max-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavCloseButton = styled.div`
  background-color: transparent;
  border: none;
  outline: none;
  align-self: flex-end;
`
export const MenuListMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
`
export const MenuLink = styled.li`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => {
    const {theme} = props
    const color = theme === 'dark' ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
`
export const MenuHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  font-weight: ${props => (props.isActive ? '900' : '400')};
  padding-left: 15px;
  text-decoration: none;
`
export const LogoutPopupContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  height: 180px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const LogoutPopupContent = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#00306e')};
  font-weight: ${props => (props.theme === 'dark' ? '300' : '500')};
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const PopupCloseButton = styled.button`
  height: 40px;
  width: 80px;
  font-family: 'Roboto';
  font-size: 14px;
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : ' #475569')};
  font-weight: 500;
  border: 1px solid ${props => (props.theme === 'dark' ? '#94a3b8' : '#909090')};
  border-radius: 3px;
  margin-right: 20px;
`
export const PopupConfirmButton = styled.button`
  height: 40px;
  width: 80px;
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #3b82f6;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#ffffff')};
  font-weight: 500;
  border: none;
  border-radius: 3px;
  margin-left: 20px;
`

export const ProfileIcon = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 28px;
    width: 28px;
    margin-right: 10px;
  }
`
export const DesktopViewNavIConsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const DesktopLogoutIcon = styled.button`
  height: 30px;
  width: 90px;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  color: #3b82f6;
  font-weight: 500;
  border: 1px solid #3b82f6;
  border-radius: 3px;
  margin-right: 20px;
`

export default styled
