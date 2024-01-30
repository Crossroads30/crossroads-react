import styled from 'styled-components'

const Navbar = () => {
	return (
			<Wrapper>
				<h1>перекрёсток</h1>
			</Wrapper>
	)
}
export default Navbar

const Wrapper = styled.header`
	height: 5rem;
	background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`
