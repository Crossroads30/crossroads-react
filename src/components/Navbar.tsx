import styled from 'styled-components'
import Links from './Links'

const Navbar = () => {
	return (
			<Wrapper>
				<h1>перекрёсток</h1>
        <Links />
			</Wrapper>
	)
}
export default Navbar

const Wrapper = styled.header`
	height: 5rem;
	background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`
