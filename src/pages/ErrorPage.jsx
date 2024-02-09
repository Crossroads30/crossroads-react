import styled from 'styled-components'
import background from '../assets/bgrs/page-bgrs/error-bgr.jpeg'

const ErrorPage = () => {
	return (
		<Wrapper>
			<div className='section-center section flex height'>
				<h2>Такой страницы не существует!</h2>
			</div>
		</Wrapper>
	)
}
export default ErrorPage

const Wrapper = styled.main`
	background: url(${background}) no-repeat center center;
	background-size: cover;
	.section {
		justify-content: center;
		align-items: flex-start;
	}
	h2 {
		color: var(--clr-grey-10);
		text-shadow: 3px 3px 6px var(--clr-black);
		font-size: 1rem;
		margin-top: 12rem;
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		h2 {
			font-size: 1.6rem;
		}
	}
	@media screen and (min-width: 1024px) {
		h2 {
			font-size: 2rem;
			margin-top: 10rem;
		}
	}
`
