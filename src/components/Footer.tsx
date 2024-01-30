import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <h2>footer</h2>
    </Wrapper>
  )
}
export default Footer

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  background-color: wheat;
  height: 5rem;
  justify-content: center;
`