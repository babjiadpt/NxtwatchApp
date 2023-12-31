import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 260px;
    height: 100vh;
    background-color: ${props =>
      props.theme === 'dark' ? '#212121' : '#ffffff'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const MenuList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const MenuLink = styled.li`
  height: 40px;
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
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: Column;
  padding: 20px;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#383838')};
  font-weight: ${props => (props.theme === 'dark' ? '500' : '700')};
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LogoIcons = styled.img`
  width: 30px;
  margin-right: 15px;
`
export const Content = styled(Heading)`
  font-weight: ${props => (props.theme === 'dark' ? '400' : '700')};
`
export default styled
