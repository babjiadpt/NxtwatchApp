import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.mode === 'Dark' ? ' #181818' : '#ffffff'};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  min-height: 300px;
  width: 90%;
  background-color: ${props => (props.mode === 'Dark' ? '#000000' : '')};
  box-shadow: ${props =>
    props.mode === 'Dark' ? 'none' : '5px 5px 10px 8px  #ebebeb'};
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 35%;
    padding: 50px;
  }
`
export const Image = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`
export const FormContainer = styled.form`
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : '#64748b')};
  font-weight: ${props => (props.mode ? '500' : '600')};
`
export const Input = styled.input`
  height: 40px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  font-weight: 400;
  border: ${props =>
    props.mode === 'Dark' ? '1px solid #475569' : '1px solid #e2e8f0'};
  background-color: transparent;
  border-radius: 4px;
  padding: 10px;
  margin-top: 5px;
  outline: none;
`

export const CheckBoxContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`
export const CheckBoxInput = styled.input`
  height: 15px;
  width: 15px;
`
export const CheckBoxLabel = styled.label`
  margin-left: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.mode === 'Dark' ? '#f9f9f9' : ' #1e293b')};
  font-weight: ${props => (props.mode === 'Dark' ? '350' : '500')};
`

export const CustomButton = styled.button`
  height: 40px;
  width: 100%;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  border-radius: 8px;
  border: none;
`
export const ShowError = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.mode ? '#ff0b37' : ' #ff0000')};
  font-weight: 400;
  @media screen and (min-width: 768px) {
    margin-top: 3px;
  }
`
export default styled
