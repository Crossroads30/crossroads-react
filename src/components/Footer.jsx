import styled from 'styled-components'
import { SlSocialYoutube } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<Wrapper>
			<div className='section-center flex footer'>
				<p className='text'>COPYRIGHT © PEREKRESTOKMUSIC {year}</p>
				<Link
					to='https://www.youtube.com/@user-sr2nv1yl6h'
					className='youTube-link'
				>
					<p>ME ON YOU TUBE</p>
					<SlSocialYoutube className='logo' />
				</Link>
			</div>
		</Wrapper>
	)
}
export default Footer

const Wrapper = styled.footer`
	background-color: var(--clr-grey-2);
	line-height: 1em;
	.footer {
		height: 3rem;
	}
	p {
		margin-bottom: 0;
		font-size: 5.8px;
	}
	.youTube-link p {
		font-family: var(--body-font);
	}
	.youTube-link {
		display: flex;
		color: var(--clr-grey-8);
		align-items: center;
		font-family: var(--body-font);
	}
	.youTube-link:hover {
		text-decoration: underline;
	}
	.logo {
		margin-left: 2px;
		color: var(--clr-grey-8);
	}
	@media screen and (min-width: 425px) {
		p {
			font-size: 0.6rem;
		}
		.logo {
			height: 17px;
			width: 17px;
			margin-left: 3px;
		}
	}
	@media screen and (min-width: 768px) {
		p {
			font-size: 0.7rem;
		}
		.logo {
			height: 20px;
			width: 20px;
			margin-left: 5px;
		}
	}
	@media screen and (min-width: 1024px) {
		.footer {
			height: 4rem;
		}
		p {
			font-size: 1rem;
		}
		.logo {
			height: 26px;
			width: 26px;
		}
		.youTube-link p {
			margin-top: 1px;
		}
	}
`
