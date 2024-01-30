import styled from 'styled-components'

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
	background-color: var(--clr-sepia);
	height: 2rem;
	justify-content: center;
	@media screen and (min-width: 768px) {
		height: 4rem;
	}
	@media screen and (min-width: 1024px) {
		height: 5rem;
	}
`
